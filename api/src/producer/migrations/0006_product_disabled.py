# Generated by Django 2.1.1 on 2018-10-05 04:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('producer', '0005_auto_20180930_0113'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='disabled',
            field=models.BooleanField(default=False),
        ),
    ]
