# Generated by Django 2.1 on 2018-08-23 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('consumer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='orderproduct',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=5),
        ),
    ]
