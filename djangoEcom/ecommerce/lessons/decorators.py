from django.shortcuts import redirect
from courses.models import Course


def lesson_owner_decorator(function):
	def wrapper(request, *args, **kwargs):
		user = request.user
		course = Course.objects.get(slug=kwargs['slug'])
		if user != course.user:
			return redirect('error403')
		else:
			return function(request, *args, **kwargs)
	return wrapper