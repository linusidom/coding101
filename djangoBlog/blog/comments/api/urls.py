from django.urls import path
from comments.api import views

app_name = 'comments_api'

urlpatterns = [
    path('approval_status/<slug:slug>', views.approval_status),

]
