# Generated by Django 2.1.1 on 2018-09-30 01:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('operative', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='operative',
            options={'verbose_name': 'operativo'},
        ),
        migrations.AlterField(
            model_name='operative',
            name='ordering_limit_date',
            field=models.DateField(verbose_name='fecha límite de ordenes'),
        ),
        migrations.AlterField(
            model_name='operative',
            name='start_date',
            field=models.DateField(auto_now_add=True, verbose_name='fecha de inicio'),
        ),
    ]
