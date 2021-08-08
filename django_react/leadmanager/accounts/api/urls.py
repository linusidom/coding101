from django.urls import path, include
from accounts.api import views
from knox import views as knox_views

app_name = 'accounts_api'

urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', views.RegisterAPI.as_view()),
    path('api/auth/login', views.LoginAPI.as_view()),
    # Protected View
    path('api/auth/user', views.UserAPI.as_view()),

    # logout
    path('api/auth/logout', knox_views.LogoutView.as_view())
]