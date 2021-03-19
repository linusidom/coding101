from django.urls import path, include
from courses import views

app_name = 'courses'

urlpatterns = [
    
    path('', views.CourseListView.as_view(), name='course_list'),
    

]
