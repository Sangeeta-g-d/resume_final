from django.urls import path,include
from . import views
from django.contrib import admin


urlpatterns = [
    
    path('', views.index, name='index'),
    path('admin_login', views.admin_login, name='admin_login'),
    path('admin_db', views.admin_db, name='admin_db')

]