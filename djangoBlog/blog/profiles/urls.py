from django.urls import path
from profiles import views

app_name = 'profiles'

urlpatterns = [
    
    # Index / Default
    path('profile_detail/<slug:slug>', views.ProfileDetailView.as_view(), name='profile_detail'),
]
