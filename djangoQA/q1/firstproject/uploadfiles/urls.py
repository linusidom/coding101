from django.urls import path, include
from uploadfiles import views

app_name = 'uploadfiles'

urlpatterns = [
    path('', views.ImageListView.as_view(), name='image_list'),
    path('create', views.image_create, name='image_create'),
]
