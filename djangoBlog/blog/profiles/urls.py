from django.urls import path
from profiles import views

app_name = 'profiles'

urlpatterns = [

    path('detail/<slug:slug>', views.ProfileDetailView.as_view(), name='profile_detail'),
    path('update/<slug:slug>', views.ProfileUpdateView.as_view(), name='profile_update'),
    path('delete/<slug:slug>', views.ProfileDeleteView.as_view(), name='profile_delete'),

]