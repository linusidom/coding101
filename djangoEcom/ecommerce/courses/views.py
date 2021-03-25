from django.shortcuts import render
from django.views.generic import ListView, DetailView, CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from courses.models import Course
from courses.forms import CourseForm
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your views here.

class CourseListView(ListView):
	model = Course

class CourseDetailView(DetailView):
	model = Course

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['course_list'] = Course.objects.filter(category=context['course'].category)

		# print(context['course_list'], context['course'].category)
		# for course in context['course_list']:
		# 	print(course.category, context['course'].category)

		return context


class CourseCreateView(LoginRequiredMixin, CreateView):
	model = Course
	form_class = CourseForm

	def form_valid(self, form, *args, **kwargs):
		course = form.save(commit=False)
		user = User.objects.get(username=self.request.user)
		course.user = user
		course.save()
		return super().form_valid(form, *args, **kwargs)























