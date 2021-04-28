from django.urls import path, include
from lessons.api import views

app_name = 'lessons_api'

urlpatterns = [
    
    path('lessons/<int:user_id>/<int:course_id>', views.LessonsListAPIView.as_view()),
    # Updateview
    path('lesson_update/<int:user_id>/<int:course_id>/<int:lesson_id>', views.lesson_update),
]
