from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')
    price = models.DecimalField(max_digits=7, decimal_places=2, verbose_name='precio')
    unit = models.CharField(max_length=50, verbose_name='unidad')
    min_amount = models.DecimalField(
        max_digits=4,
        decimal_places=2,
        verbose_name='cantidad mínima',
    )
    producer = models.ForeignKey('producer.Producer', models.CASCADE, verbose_name='productor')

    class Meta:
        ordering = ('id',)
        verbose_name = 'producto'

    def __str__(self):
        return self.name


class Producer(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')
    slug = models.SlugField(max_length=200)

    class Meta:
        verbose_name = 'productor'
        verbose_name_plural = 'productores'

    def __str__(self):
        return self.name
