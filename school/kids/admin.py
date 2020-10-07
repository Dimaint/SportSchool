from django.contrib import admin
from .models import Kids, Parents, Groups, VisitsLog, Tickets

admin.site.register(Kids)
admin.site.register(Parents)
admin.site.register(Groups)
admin.site.register(VisitsLog)
admin.site.register(Tickets)


class TagAdmin(admin.ModelAdmin):
    list_display = ('Name')
# Register your models here.
