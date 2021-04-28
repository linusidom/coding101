from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

User = get_user_model()

class CustomUserCreationForm(UserCreationForm):
	class Meta:
		model = User
		# exclude = []
		fields = ['first_name', 'last_name', 'username', 'email']

class UserForm(forms.ModelForm):
	class Meta:
		model = User
		fields = ['username', 'email', 'first_name', 'last_name']

	def clean_email(self):
		email = self.cleaned_data['email']
		# print('***', email)

		# Check if email exists in the database already

		user = User.objects.get(id=self.instance.id)

		if user.email == email:
			return email

		user_email = User.objects.filter(email=email)
		if user_email.exists():
			raise forms.ValidationError('Email Already Exists')

		# Is the user email the same as the email being input

		# Or is the user email blank
		
		return email

