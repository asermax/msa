from rest_framework import viewsets

from . import models, serializers, filters


class OrderViewSet(viewsets.ModelViewSet):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    filterset_class = filters.OrderFilterSet
