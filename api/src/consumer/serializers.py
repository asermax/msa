from rest_framework import serializers

from . import models


class NestedOrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderProduct
        fields = ('product', 'amount')


class OrderSerializer(serializers.ModelSerializer):
    organization = serializers.SlugRelatedField(
        slug_field='slug',
        queryset=models.Organization.objects.all()
    )
    products = NestedOrderProductSerializer(many=True)

    class Meta:
        model = models.Order
        fields = ('id', 'user', 'organization', 'products', 'created', 'paid')
        read_only_fields = ('created',)

    def create(self, validated_data):
        products = validated_data.pop('products')
        order = models.Order.objects.create(**validated_data)
        models.OrderProduct.objects.bulk_create([
            models.OrderProduct(order=order, **product) for product in products
        ])

        return order
