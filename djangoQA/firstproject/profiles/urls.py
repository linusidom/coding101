from django.urls import path, include
from profiles import views

app_name = 'profiles'

urlpatterns = [
    path('', views.ProfileListView.as_view(), name='profile'),
    path('<int:pk>', views.ProfileUpdateView.as_view(), name='profile_update'),
]
