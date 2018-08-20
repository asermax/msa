from django.contrib import admin
from . import models


class OrderProductInline(admin.TabularInline):
    model = models.OrderProduct


class OrderAdmin(admin.ModelAdmin):
    model = models.Order
    inlines = (OrderProductInline,)


admin.site.register(models.Order, OrderAdmin)
