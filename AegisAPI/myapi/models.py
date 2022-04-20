from django.db import models

class Hero(models.Model):
    premium = models.IntegerField(default=0)
    firstName = models.CharField(max_length=60, default='Jane')
    fullName = models.CharField(max_length=60, default='Jane Doe')
    username = models.CharField(max_length=60, default='Username')
    email = models.CharField(max_length=100, default='email@example.com')
    password = models.CharField(max_length=999, default='password')
    companyName = models.CharField(max_length=999, default='May Realities, Inc.')
    companySummary = models.CharField(max_length=120, default='May Realities sells Computer Vision software.')
    companyAge = models.CharField(max_length=999, default='1 Year')
    companyCameras = models.CharField(max_length=999, default='17')
    companySqft = models.CharField(max_length=999999999, default='6,000')

    def __int__(self):
        return self.premium

class Notification(models.Model):
    notification = models.CharField(max_length=9999, default="Notification")

    def __str__(self):
        return self.notification

class LostInventoryData(models.Model):
    LIM = models.CharField(max_length=100000, default='0') #Lost Inventory Monday
    LIT = models.CharField(max_length=100000, default='0') #Lost Inventory Tuesday
    LIW = models.CharField(max_length=100000, default='0') #Lost Inventory Wednesday
    LITH = models.CharField(max_length=100000, default='0') #Lost Inventory Thursday
    LIF = models.CharField(max_length=100000, default='0') #Lost Inventory Friday
    LISA = models.CharField(max_length=100000, default='0') #Lost Inventory Saturday
    LISU = models.CharField(max_length=100000, default='0') ##Lost Inventory Sunday
    def __str__(self):
        return self.LIM

class CrimeDetectionData(models.Model):
    CSM = models.CharField(max_length=100000, default='0') #Crime Data Monday
    CST = models.CharField(max_length=100000, default='0') #Crime Data Tuesday
    CSW = models.CharField(max_length=100000, default='0') #Crime Data Wednesday
    CSTH = models.CharField(max_length=100000, default='0') #Crime Data Thursday
    CSF = models.CharField(max_length=100000, default='0') #Crime Data Friday
    CSST = models.CharField(max_length=100000, default='0') #Crime Data Saturday
    CSSU = models.CharField(max_length=100000, default='0') #Crime Data Sunday
    def __str__(self):
        return self.CSM

class CameraAPI(models.Model):
    IP = models.CharField(max_length=100)#IP Address for cameras
    cameraName = models.CharField(max_length=100, default="Camera") #Given name for a camera
    cameraIndex = models.IntegerField(default=1) #Camera Index is used for navigating between cameras in Web App.


    def __str__(self):
        return self.IP

class MessageAPI(models.Model):
    message = models.CharField(max_length=200, default="Message")

    def __str__(self):
        return self.message
