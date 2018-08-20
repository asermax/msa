from rest_framework import serializers

from . import models


class OrderProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.OrderProduct
        fields = ('id', 'order', 'product', 'amount')


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Order
        fields = ('id', 'user', 'products', 'created')
        read_only_fields = ('created',)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        if self.instance is not None:
            print(self.fields, self.fields['products'])
            # if we have an instance to modify, we want to allow nested modifications
            self.fields['products'] = OrderProductSerializer(many=True, write_only=True)

