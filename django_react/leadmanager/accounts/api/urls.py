from django.urls import path
from accounts.api.views import UserAPIView, LoginAPIView, RegisterAPIView, LogoutView
from knox import views as knox_views

urlpatterns = [
    path('api/auth/user', UserAPIView.as_view()),
    path('api/auth/register', RegisterAPIView.as_view()),
    path('api/auth/login', LoginAPIView.as_view()),

    # Logout View
    path('api/auth/logout', LogoutView.as_view()),
]