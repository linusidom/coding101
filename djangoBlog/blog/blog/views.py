from django.shortcuts import render
from django.contrib.auth import login, authenticate, get_user_model
from blog.forms import SignUpForm
# from django.contrib.auth.forms import UserCreationForm

from django.shortcuts import render, redirect

User = get_user_model()


def index_view(request):
	return render(request, 'index.html')

def error403_view(request):
	return render(request, 'error403.html')


def error404_view(request):
	return render(request, 'error404.html')


def signup(request):
	if request.method == 'POST':
		form = SignUpForm(request.POST)
		if form.is_valid():
			user = form.save(commit=False)
			user.save()
			username = form.cleaned_data.get('username')
			raw_password = form.cleaned_data.get('password1')
			user = authenticate(username=username, password=raw_password)
			login(request, user)
			return redirect('index')
	else:
		form = SignUpForm()
	return render(request, 'accounts/signup.html', {'form': form})