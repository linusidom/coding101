from django.urls import path, include
from profiles import views

app_name = 'profiles'

urlpatterns = [
    
    path('detail/<slug:slug>', views.ProfileDetailView.as_view(), name='profile_detail'),
    path('update/<int:pk>', views.ProfileUpdateView.as_view(), name='profile_update'),
    

]
