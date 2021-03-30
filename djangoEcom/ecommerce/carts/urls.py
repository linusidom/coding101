from django.urls import path, include
from carts import views

app_name = 'carts'

urlpatterns = [
    
    path('', views.cart, name='cart'),
    path('cart_update/<slug:slug>', views.cart_update, name='cart_update'),

]
