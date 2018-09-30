from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=200, verbose_name='nombre')
    slug = models.SlugField(max_length=200)

    class Meta:
        verbose_name = 'organización'
        verbose_name_plural = 'organizaciones'

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.CharField(max_length=200, verbose_name='usuario')
    organization = models.ForeignKey(
        'Organization',
        on_delete=models.CASCADE,
        verbose_name='organización',
    )
    created = models.DateTimeField(auto_now_add=True, verbose_name='fecha de creación')

    class Meta:
        verbose_name = 'orden'
        verbose_name_plural = 'ordenes'

    def __str__(self):
        return 'Orden de {}'.format(self.user)


class OrderProduct(models.Model):
    order = models.ForeignKey(
        'Order',
        on_delete=models.CASCADE,
        related_name='products',
        verbose_name='orden',
    )
    product = models.ForeignKey(
        'producer.Product',
        on_delete=models.CASCADE,
        related_name='+',
        verbose_name='producto',
    )
    amount = models.DecimalField(max_digits=5, decimal_places=2, verbose_name='cantidad')

    class Meta:
        verbose_name = 'producto de orden'
        verbose_name = 'productos de orden'
