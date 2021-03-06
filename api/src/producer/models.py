from django.db import models


class Producer(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')
    slug = models.SlugField(max_length=200)

    class Meta:
        verbose_name = 'productor'
        verbose_name_plural = 'productores'

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')

    class Meta:
        verbose_name = 'categoria'
        verbose_name_plural = 'categorias'

    def __str__(self):
        return self.name


class ProductQueryset(models.QuerySet):
    def only_enabled(self):
        return self.exclude(disabled=True)


class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')
    price = models.DecimalField(max_digits=7, decimal_places=2, verbose_name='precio')
    unit = models.CharField(max_length=50, verbose_name='unidad')
    min_amount = models.DecimalField(
        max_digits=4,
        decimal_places=2,
        verbose_name='cantidad mínima',
    )
    disabled = models.BooleanField(default=False, verbose_name='deshabilitado')
    producer = models.ForeignKey(Producer, models.CASCADE, verbose_name='productor')
    category = models.ForeignKey(Category, models.CASCADE, verbose_name='categoria')

    objects = ProductQueryset.as_manager()

    class Meta:
        ordering = ('id',)
        verbose_name = 'producto'

    def __str__(self):
        return self.name
