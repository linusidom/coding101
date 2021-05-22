from django.urls import path, include
from files import views

app_name = 'files'


urlpatterns = [
    
    path('', views.FileListView.as_view(), name='file_list'),
    path('create', views.file_create, name='file_create'),
]
