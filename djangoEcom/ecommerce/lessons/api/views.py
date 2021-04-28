from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from lessons.models import LessonCompleted
from lessons.api.models import LessonCompletedSerializer

class LessonsListAPIView(ListAPIView):
	serializer_class = LessonCompletedSerializer

	def get_queryset(self, *args, **kwargs):
		print(self)
		print(self.kwargs)
		print(args)
		print(kwargs)

		lessons = LessonCompleted.objects.filter(user__id=self.kwargs['user_id'], course__id=self.kwargs['course_id'])
		return lessons

def lesson_update(request, user_id, course_id, lesson_id):
	# print(user_id, course_id, lesson_id)

	lesson = LessonCompleted.objects.get(user__id=user_id, course__id=course_id, id=lesson_id)
	# print(lesson)

	if lesson.completed == False:
		lesson.completed = True
	else:
		lesson.completed = False
	lesson.save()

	serializer = LessonCompletedSerializer(lesson)

	return JsonResponse(serializer.data, safe=False)