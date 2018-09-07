from django.db import models


class Organization(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)

    def __str__(self):
        return self.name


class Order(models.Model):
    user = models.CharField(max_length=200)
    organization = models.ForeignKey('Organization', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Orden de {}'.format(self.user)


class OrderProduct(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='products')
    product = models.ForeignKey('producer.Product', on_delete=models.CASCADE, related_name='+')
    amount = models.DecimalField(max_digits=5, decimal_places=2)
