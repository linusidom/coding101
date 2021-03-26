"""ecommerce URL Configuration

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
from django.views.generic import TemplateView
from ecommerce import views, settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.IndexTemplateView.as_view(), name='index'),
    path('blog', TemplateView.as_view(template_name='blog.html'), name='blog'),
    path('courses_test', TemplateView.as_view(template_name='courses.html'), name='courses'),
    path('contact', TemplateView.as_view(template_name='contact.html'), name='contact'),
    path('single-course', TemplateView.as_view(template_name='single-course.html'), name='single-course'),
    path('error403', TemplateView.as_view(template_name='error403.html'), name='error403'),

    # ALL AUTH
    path('accounts/', include('allauth.urls')),

    path('courses/', include('courses.urls', namespace='courses')),

    path('ckeditor/', include('ckeditor_uploader.urls')),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



















