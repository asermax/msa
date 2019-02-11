from rest_framework import viewsets

from . import models
from . import serializers


class ProductViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Product.objects.only_enabled()
    serializer_class = serializers.ProductSerializer
    ordering_fields = ('producer', 'category')


class ProducerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = models.Producer.objects.all()
    serializer_class = serializers.ProducerSerializer
