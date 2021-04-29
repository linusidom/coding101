from django.shortcuts import render
from django.urls import reverse_lazy
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from courses.models import Course, CourseFeedback
from courses.forms import CourseForm, CourseFeedbackForm
from courses.mixins import CourseOwnerMixin, IsTeacherMixin, CourseStudentMixin
from lessons.models import LessonCompleted
from carts.models import Cart
from django.db.models import Avg, Q
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

		context['cart'], created = Cart.objects.get_or_new(self.request)

		if self.request.user.is_authenticated:
			context['purchased_lesson'] = LessonCompleted.objects.filter(user__username=self.request.user, course=context['course'])
			print(context['purchased_lesson'])

		# print(context['course_list'], context['course'].category)
		# for course in context['course_list']:
		# 	print(course.category, context['course'].category)

		return context


class CourseCreateView(IsTeacherMixin, CreateView):
	model = Course
	form_class = CourseForm

	def form_valid(self, form, *args, **kwargs):
		course = form.save(commit=False)
		user = User.objects.get(username=self.request.user)
		course.user = user
		course.save()
		return super().form_valid(form, *args, **kwargs)

class CourseUpdateView(CourseOwnerMixin, UpdateView):
	model = Course
	form_class = CourseForm

class CourseDeleteView(CourseOwnerMixin, DeleteView):
	model = Course
	success_url = reverse_lazy('index')



class CourseFeedbackCreateView(CourseStudentMixin, CreateView):
	model = CourseFeedback
	form_class = CourseFeedbackForm
	template_name = 'courses/course_feedback.html'

	def form_valid(self, form, *args, **kwargs):
		feedback = form.save(commit=False)

		course = Course.objects.get(slug=self.kwargs['slug'])
		user = User.objects.get(username=self.request.user)

		feedback.course = course
		feedback.user = user
		feedback.save()

		rating = CourseFeedback.objects.filter(course=course).aggregate(Avg('course_rating'))
		print('Course Rating', rating)

		course.course_rating = round(rating['course_rating__avg'])
		course.save()

		return super().form_valid(form, *args, **kwargs)



class CourseCertificateDetailView(CourseStudentMixin, DetailView):
	model = Course
	template_name = 'courses/course_cert.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['lesson_completed'] = LessonCompleted.objects.filter(
			user__username=self.request.user,
			course=context['course']).first()

		return context




class CourseSearchListView(ListView):
	model = Course
	template_name = 'courses/course_search.html'

	def get_queryset(self):

		query = self.request.GET.get('course', None)

		lookup = Q(name__icontains=query)|Q(short_description__icontains=query)

		queryset = Course.objects.filter(lookup)

		return queryset


























