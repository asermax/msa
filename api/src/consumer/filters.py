import django_filters as filters

from . import models


class OrderFilterSet(filters.FilterSet):
    organization = filters.CharFilter(field_name='organization__slug')

    class Meta:
        model = models.Order
        fields = ('organization',)
