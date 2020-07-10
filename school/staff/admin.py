from django.contrib import admin
from .models import Trainer

# Register your models here.
admin.site.register(Trainer)

class TagAdmin(admin.ModelAdmin):
    list_display = ('Name')


