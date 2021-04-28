from rest_framework import serializers
from lessons.models import LessonCompleted

class LessonCompletedSerializer(serializers.ModelSerializer):
	class Meta:
		model = LessonCompleted
		fields = ['id', 'user', 'course', 'lesson', 'completed', 'slug']