from django.contrib import admin
from . import models


class OperativeAdmin(admin.ModelAdmin):
    fields = ('start_date', 'ordering_limit_date')
    readonly_fields = ('start_date',)


admin.site.register(models.Operative, OperativeAdmin)
