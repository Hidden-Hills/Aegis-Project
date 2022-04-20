from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static, serve
from FaangAPI.settings import FRONTEND_ROOT
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapi.urls')),
]
