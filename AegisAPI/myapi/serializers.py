from django.core.checks import messages
from django.db import models
from django.db.models import fields
from rest_framework import serializers

from .models import CameraAPI, Hero, MessageAPI, Notification, LostInventoryData, CrimeDetectionData


class HeroSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        app_label = '<myapi>'
        model = Hero
        fields = ('__all__')

class NotificationSerializer(serializers.HyperlinkedModelSerializer):
    class Meta: 
        app_label = '<myapi>'
        model = Notification
        fields = ('__all__')

class LostInventorySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        app_label = '<myapi>'
        model = LostInventoryData
        fields = ('__all__')

class CrimeDataSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        app_label = '<myapi>'
        model = CrimeDetectionData
        fields = ('__all__')

class CameraAPISerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        app_label = '<myapi>'
        model = CameraAPI
        fields = ('__all__')

class MessageAPISerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        app_label = '<myapi>'
        model = MessageAPI
        fields = ('__all__')