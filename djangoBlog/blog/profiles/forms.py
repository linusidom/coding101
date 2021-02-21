from django import forms
from profiles.models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()

class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ['username','email']