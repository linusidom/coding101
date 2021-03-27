from django.urls import path, include
from lessons import views

app_name = 'lessons'

urlpatterns = [
    
    path('detail/<slug:slug>', views.LessonDetailView.as_view(), name='lesson_detail'),
    path('update/<slug:slug>', views.LessonUpdateView.as_view(), name='lesson_update'),
    path('delete/<slug:slug>', views.LessonDeleteView.as_view(), name='lesson_delete'),
    path('create/<slug:slug>', views.lesson_create, name='lesson_create'),

]
