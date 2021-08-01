from django.urls import path
from frontend import views

app_name = 'frontend_leads'

urlpatterns = [
    path('', views.index, name='index'),
]
