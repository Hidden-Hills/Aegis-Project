from django.db.models import query
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import CameraAPISerializer, CrimeDataSerializer, HeroSerializer, LostInventorySerializer, MessageAPISerializer, NotificationSerializer
from .models import CameraAPI, CrimeDetectionData, Hero, LostInventoryData, MessageAPI, Notification


class HeroViewSet(viewsets.ModelViewSet):
    queryset = Hero.objects.all().order_by('premium')
    serializer_class = HeroSerializer

class NotificationViewSet(viewsets.ModelViewSet):
    queryset = Notification.objects.all().order_by('notification')
    serializer_class = NotificationSerializer

class LostInventoryViewSet(viewsets.ModelViewSet):
    queryset = LostInventoryData.objects.all().order_by('LIM')
    serializer_class = LostInventorySerializer

class CrimeDetectionViewSet(viewsets.ModelViewSet):
    queryset = CrimeDetectionData.objects.all().order_by('CSM')
    serializer_class = CrimeDataSerializer

class CameraAPIDataViewSet(viewsets.ModelViewSet):
    queryset = CameraAPI.objects.all().order_by('IP')
    serializer_class = CameraAPISerializer

class MessageAPIDataViewSet(viewsets.ModelViewSet):
    queryset = MessageAPI.objects.all().order_by('message')
    serializer_class = MessageAPISerializer