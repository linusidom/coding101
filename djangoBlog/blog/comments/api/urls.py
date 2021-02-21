from django.urls import path
from comments.api import views

app_name = 'comments_api'

urlpatterns = [
    
    
    path('approval_update/<slug:slug>', views.approval_update),
    path('approval_check/<slug:slug>', views.approval_check),
    
    

]
