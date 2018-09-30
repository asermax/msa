from django.db import models
from django.utils import formats


class OperativeQueryset(models.QuerySet):
    def get_current(self):
        return self.latest()


class Operative(models.Model):
    start_date = models.DateField(auto_now_add=True, verbose_name='fecha de inicio')
    ordering_limit_date = models.DateField(verbose_name='fecha límite de ordenes')

    objects = OperativeQueryset.as_manager()

    class Meta:
        get_latest_by = ('-start_date',)
        verbose_name = 'operativo'

    def __str__(self):
        return f'Operativo {formats.date_format(self.start_date, format="YEAR_MONTH_FORMAT")}'
