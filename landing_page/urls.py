from django.urls import path,include
from . import views
from django.contrib import admin


urlpatterns = [
    
    path('', views.index, name='index'),
    #path("generate-text/", views.generate_text, name="generate_text"),
    path('admin_login', views.admin_login, name='admin_login'),
    path('admin_db', views.admin_db, name='admin_db'),
    path('admin_logout', views.admin_logout, name='admin_logout'),
    path('upload/', views.upload_file, name='upload_file'),
    path('team/<int:id>', views.team, name='team'),
    path('resume/<int:id>/<int:u_id>', views.resume, name='resume'),
    path('resume1', views.resume1, name='resume1'),
    #path('generate_content', views.generate_content, name='generate_content'),
    path('generate_content', views.generate_content, name='generate_content'),
   


]