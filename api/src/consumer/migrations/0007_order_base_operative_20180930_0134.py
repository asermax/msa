# Generated by Django 2.1.1 on 2018-09-30 01:34

from django.db import migrations
from django.utils import timezone


def forward(apps, schema_editor):
    Operative = apps.get_model('operative', 'Operative')
    Order = apps.get_model('consumer', 'Order')

    # create placeholder operative
    operative = Operative.objects.create(ordering_limit_date=timezone.now())

    # set the operative on all existing orders
    Order.objects.update(operative=operative)


def backward(apps, schema_editor):
    Order = apps.get_model('consumer', 'Order')

    # remove the operative from all existing orders
    Order.objects.update(operative=None)


class Migration(migrations.Migration):

    dependencies = [
        ('consumer', '0006_order_operative'),
        ('operative', '0002_auto_20180930_0116')
    ]

    operations = [
        migrations.RunPython(forward, backward)
    ]
