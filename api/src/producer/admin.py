from django.contrib import admin
from django.utils import formats
from . import models


class ProducerAdmin(admin.ModelAdmin):
    model = models.Producer
    prepopulated_fields = {'slug': ('name',)}


class CategoryAdmin(admin.ModelAdmin):
    model = models.Category


class ProductAdmin(admin.ModelAdmin):
    model = models.Product
    list_display = ('name', 'unit', 'precio_por_unidad', 'producer', 'min_amount', 'disabled')

    def precio_por_unidad(self, obj):
        return f'${formats.number_format(obj.price, force_grouping=True)}'


admin.site.register(models.Producer, ProducerAdmin)
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Product, ProductAdmin)
