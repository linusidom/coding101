from django.urls import path
from comments.api import views

app_name = 'comments_api'

urlpatterns = [
    path('approval_status/<slug:slug>', views.approval_status),
    path('update_approval_status/<slug:slug>', views.update_approval_status),
]
