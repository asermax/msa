import django_filters as filters

from operative import models as operative_models
from . import models


class OrderFilterSet(filters.FilterSet):
    organization = filters.CharFilter(field_name='organization__slug')

    class Meta:
        model = models.Order
        fields = ('organization', 'operative')

    def __init__(self, data, *args, **kwargs):
        if 'operative' not in data:
            # by default filter by the current operative
            data = data.copy()
            data['operative'] = operative_models.Operative.objects.get_current().id

        super().__init__(data, *args, **kwargs)
