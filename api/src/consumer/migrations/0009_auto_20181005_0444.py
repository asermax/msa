# Generated by Django 2.1.1 on 2018-10-05 04:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('consumer', '0008_auto_20180930_0139'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='operative',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='operative.Operative', verbose_name='operativo'),
        ),
    ]
