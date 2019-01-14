from django.contrib import admin
from django.utils import formats
from . import models


class ProductAdmin(admin.ModelAdmin):
    model = models.Product
    list_display = ('name', 'unit', 'precio_por_unidad', 'producer', 'min_amount', 'disabled')

    def precio_por_unidad(self, obj):
        return f'${formats.number_format(obj.price, force_grouping=True)}'


class ProducerAdmin(admin.ModelAdmin):
    model = models.Producer
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(models.Product, ProductAdmin)
admin.site.register(models.Producer, ProducerAdmin)
