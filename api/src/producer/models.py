from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    unit = models.CharField(max_length=50)
    min_amount = models.DecimalField(max_digits=4, decimal_places=2)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.name
