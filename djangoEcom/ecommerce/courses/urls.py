from django.urls import path, include
from courses import views

app_name = 'courses'

urlpatterns = [
    
    path('', views.CourseListView.as_view(), name='course_list'),
    path('detail/<slug:slug>', views.CourseDetailView.as_view(), name='course_detail'),
    path('create', views.CourseCreateView.as_view(), name='course_create'),
    path('update/<slug:slug>', views.CourseUpdateView.as_view(), name='course_update'),
    path('delete/<slug:slug>', views.CourseDeleteView.as_view(), name='course_delete'),

    # Feedback
    path('feedback/<slug:slug>', views.CourseFeedbackCreateView.as_view(), name='course_feedback'),

    path('certificate/<slug:slug>', views.CourseCertificateDetailView.as_view(), name='course_certificate'),
]
