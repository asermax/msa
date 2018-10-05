from rest_framework import viewsets

from . import models
from . import serializers


class ProductViewSet(viewsets.ModelViewSet):
    queryset = models.Product.objects.only_enabled()
    serializer_class = serializers.ProductSerializer


class ProducerViewSet(viewsets.ModelViewSet):
    queryset = models.Producer.objects.all()
    serializer_class = serializers.ProducerSerializer
