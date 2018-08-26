from django.contrib import admin
from . import models


class OrganizationAdmin(admin.ModelAdmin):
    model = models.Organization
    prepopulated_fields = {'slug': ('name',)}


class OrderProductInline(admin.TabularInline):
    model = models.OrderProduct


class OrderAdmin(admin.ModelAdmin):
    model = models.Order
    inlines = (OrderProductInline,)


admin.site.register(models.Order, OrderAdmin)
admin.site.register(models.Organization, OrganizationAdmin)
