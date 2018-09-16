from django.contrib import admin
from . import models


class ProducerAdmin(admin.ModelAdmin):
    model = models.Producer
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(models.Product)
admin.site.register(models.Producer, ProducerAdmin)
