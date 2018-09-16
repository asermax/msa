from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    unit = models.CharField(max_length=50)
    min_amount = models.DecimalField(max_digits=4, decimal_places=2)
    producer = models.ForeignKey('producer.Producer', models.CASCADE)

    class Meta:
        ordering = ('id',)

    def __str__(self):
        return self.name


class Producer(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200)

    def __str__(self):
        return self.name
