"""blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.contrib.auth import views as auth_views
from blog import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index_view, name='index'),
    path('posts/', include('posts.urls', namespace='posts')),
    path('comments_api/', include('comments.api.urls', namespace='comments_api')),
    path('comments/', include('comments.urls', namespace='comments')),
    path('profiles/', include('profiles.urls', namespace='profiles')),

    path('login', auth_views.LoginView.as_view(template_name = 'accounts/login.html'), name='user_login'),
    path('logout', auth_views.LogoutView.as_view(), name='user_logout'),
    path('signup', views.signup, name='signup'),

    path('error403', views.error403_view, name='error403'),
    path('error404', views.error404_view, name='error404'),
]
