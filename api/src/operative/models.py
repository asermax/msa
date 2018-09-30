from django.db import models
from django.utils import formats


class Operative(models.Model):
    start_date = models.DateField(auto_now_add=True)
    ordering_limit_date = models.DateField()

    def __str__(self):
        return f'Operativo {formats.date_format(self.start_date, format="YEAR_MONTH_FORMAT")}'
