from rest_framework import viewsets

from msa import permissions
from operative import models as operative_models
from . import models, serializers, filters


class OrderViewSet(viewsets.ModelViewSet):
    queryset = models.Order.objects.all()
    serializer_class = serializers.OrderSerializer
    filterset_class = filters.OrderFilterSet
    permission_classes = (permissions.IsAuthenticatedOrCreateOnly,)

    def perform_create(self, serializer):
        # use the current operative when creating a new order
        current_operative = operative_models.Operative.objects.get_current()
        serializer.save(operative=current_operative)
