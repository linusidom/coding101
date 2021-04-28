from django.urls import path, include
from cards import views

app_name = 'cards'

urlpatterns = [
    
    path('card_create', views.card_create, name='card_create'),
    path('card_delete/<slug:slug>', views.CardDeleteView.as_view(), name='card_delete'),
    

]
