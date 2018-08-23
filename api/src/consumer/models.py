from django.db import models


class Order(models.Model):
    user = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return 'Orden de {}'.format(self.user)


class OrderProduct(models.Model):
    order = models.ForeignKey('Order', on_delete=models.CASCADE, related_name='products')
    product = models.ForeignKey('producer.Product', on_delete=models.CASCADE, related_name='+')
    amount = models.DecimalField(max_digits=5, decimal_places=2)
