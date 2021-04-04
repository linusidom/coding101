from django.urls import path, include
from billings import views

app_name = 'billings'

urlpatterns = [
    
    
    path('omise_view', views.omise_view, name='omise_view'),
    

]
