from django.urls import path, include
from products.api import views


app_name = 'products_api'

urlpatterns = [
    
    path('', views.product_api_list, name='product_api_list'),
    
]