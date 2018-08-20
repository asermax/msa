from rest_framework import serializers

from . import models


class NestedOrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderProduct
        fields = ('id', 'product', 'amount')


class OrderSerializer(serializers.ModelSerializer):
    products = NestedOrderProductSerializer(many=True)

    class Meta:
        model = models.Order
        fields = ('id', 'user', 'products', 'created')
        read_only_fields = ('created',)

    def create(self, validated_data):
        products = validated_data.pop('products')
        order = models.Order.objects.create(**validated_data)
        models.OrderProduct.objects.bulk_create([
            models.OrderProduct(order=order, **product) for product in products
        ])

        return order
