# Generated by Django 2.1.1 on 2018-09-30 01:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('consumer', '0004_auto_20180826_2350'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='order',
            options={'verbose_name': 'orden', 'verbose_name_plural': 'ordenes'},
        ),
        migrations.AlterModelOptions(
            name='orderproduct',
            options={'verbose_name': 'productos de orden'},
        ),
        migrations.AlterModelOptions(
            name='organization',
            options={'verbose_name': 'organización', 'verbose_name_plural': 'organizaciones'},
        ),
        migrations.AlterField(
            model_name='order',
            name='created',
            field=models.DateTimeField(auto_now_add=True, verbose_name='fecha de creación'),
        ),
        migrations.AlterField(
            model_name='order',
            name='organization',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='consumer.Organization', verbose_name='organización'),
        ),
        migrations.AlterField(
            model_name='order',
            name='user',
            field=models.CharField(max_length=200, verbose_name='usuario'),
        ),
        migrations.AlterField(
            model_name='orderproduct',
            name='amount',
            field=models.DecimalField(decimal_places=2, max_digits=5, verbose_name='cantidad'),
        ),
        migrations.AlterField(
            model_name='orderproduct',
            name='order',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='products', to='consumer.Order', verbose_name='orden'),
        ),
        migrations.AlterField(
            model_name='orderproduct',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='+', to='producer.Product', verbose_name='producto'),
        ),
        migrations.AlterField(
            model_name='organization',
            name='name',
            field=models.CharField(max_length=200, verbose_name='nombre'),
        ),
    ]
