from django.urls import path, include
from billings import views

app_name = 'billings'

urlpatterns = [
    
    
    path('omise_view', views.omise_view, name='omise_view'),
    path('omise_processor', views.omise_processor, name='omise_processor'),
    

]
