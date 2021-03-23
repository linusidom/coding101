from django.shortcuts import render
from django.views.generic import ListView, DetailView
from courses.models import Course
# Create your views here.

class CourseListView(ListView):
	model = Course

class CourseDetailView(DetailView):
	model = Course

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['course_list'] = Course.objects.filter(category=context['course'].category)

		# print(context['course_list'], context['course'].category)
		for course in context['course_list']:
			print(course.category, context['course'].category)

		return context

