from django.shortcuts import render, get_object_or_404, redirect
from django.urls import reverse
from django.views.generic import DetailView, UpdateView, DeleteView
from lessons.models import Lesson
from lessons.forms import LessonForm
from courses.models import Course


# Create your views here.
class LessonDetailView(DetailView):
	model = Lesson

class LessonUpdateView(UpdateView):
	model = Lesson
	form_class = LessonForm

class LessonDeleteView(DeleteView):
	model = Lesson

	# Return to course detail page
	def get_success_url(self, *args, **kwargs):
		lesson = Lesson.objects.get(slug=self.kwargs['slug'])
		return reverse('courses:course_detail', kwargs={'slug': lesson.course.slug})

def lesson_create(request, slug):
	course = get_object_or_404(Course, slug=slug)
	if request.method == 'POST':
		form = LessonForm(request.POST)
		if form.is_valid:
			lesson = form.save(commit= False)
			lesson.course = course
			lesson.user = course.user
			lesson.save()
			return redirect(lesson.get_absolute_url())

	else:
		form = LessonForm()

	return render(request, 'lessons/lesson_form.html', {'form': form})



















	