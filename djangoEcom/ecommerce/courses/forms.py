from django import forms
from courses.models import Course, CourseFeedback

class CourseForm(forms.ModelForm):
	class Meta:
		model = Course
		fields = ['name', 'short_description', 'long_description', 'certification', 'image', 'price', 'category']

class CourseFeedbackForm(forms.ModelForm):
	class Meta:
		model = CourseFeedback
		fields = ['course_rating', 'message']