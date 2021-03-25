from django.urls import path, include
from courses import views

app_name = 'courses'

urlpatterns = [
    
    path('', views.CourseListView.as_view(), name='course_list'),
    path('detail/<slug:slug>', views.CourseDetailView.as_view(), name='course_detail'),
    path('create', views.CourseCreateView.as_view(), name='course_create'),

]
