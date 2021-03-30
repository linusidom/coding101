from django.urls import path, include
from carts import views

app_name = 'carts'

urlpatterns = [
    
    path('', views.cart, name='cart'),

]
