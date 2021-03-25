from django import forms
from courses.models import Course

class CourseForm(forms.ModelForm):
	class Meta:
		model = Course
		fields = ['name', 'short_description', 'long_description', 'certification', 'image', 'price', 'category']
