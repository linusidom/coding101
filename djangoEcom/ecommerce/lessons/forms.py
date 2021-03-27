from django import forms
from lessons.models import Lesson

class LessonForm(forms.ModelForm):
	class Meta:
		model = Lesson
		exclude = ['user', 'course','completed','slug']