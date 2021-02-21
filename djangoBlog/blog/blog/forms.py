from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import get_user_model

User = get_user_model()

class SignUpForm(UserCreationForm):
	class Meta:
		model = User
		fields = ['username', 'email', 'password1', 'password2']
		widgets = {
			'username': forms.TextInput(attrs={'class':'form-control'}),
			'email': forms.EmailInput(attrs={'class':'form-control'}),
		}

	def __init__(self, *args, **kwargs):
		super(SignUpForm, self).__init__(*args, **kwargs)
		self.fields['password1'].widget = forms.PasswordInput(attrs={'class': 'form-control'})
		self.fields['password2'].widget = forms.PasswordInput(attrs={'class': 'form-control'})

