from django.urls import include, path, re_path
from django.conf.urls.static import static, serve
from FaangAPI.settings import FRONTEND_ROOT
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'heroes', views.HeroViewSet)
router.register(r'notifications', views.NotificationViewSet)
router.register(r'lostinventory', views.LostInventoryViewSet)
router.register(r'crimedata', views.CrimeDetectionViewSet)
router.register(r'cameraaddress', views.CameraAPIDataViewSet)
router.register(r'messages', views.MessageAPIDataViewSet)
# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]