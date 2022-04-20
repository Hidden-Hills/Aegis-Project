from django.contrib import admin

from .models import CrimeDetectionData, Hero, LostInventoryData, Notification

admin.site.register(Hero)
admin.site.register(Notification)
admin.site.register(LostInventoryData)
admin.site.register(CrimeDetectionData)