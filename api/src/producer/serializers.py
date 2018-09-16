from rest_framework import serializers

from . import models


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Product
        fields = ('id', 'name', 'price', 'unit', 'min_amount', 'producer')


class ProducerSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Producer
        fields = ('id', 'name', 'slug')
