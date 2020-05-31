from django.contrib import admin
from .models import Kids, Parents, Groups

admin.site.register(Kids)
admin.site.register(Parents)
admin.site.register(Groups)


class TagAdmin(admin.ModelAdmin):
    list_display = ('Name')
# Register your models here.
