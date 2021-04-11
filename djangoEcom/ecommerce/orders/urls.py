from django.urls import path, include
from orders import views

app_name = 'orders'

urlpatterns = [
    
    path('order_summary', views.order_summary, name='order_summary'),
    

]
