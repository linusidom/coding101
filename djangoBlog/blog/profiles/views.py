from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, UpdateView, CreateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model, logout

User = get_user_model()

from profiles.models import Profile
from profiles.forms import UserForm
from profiles.mixins import ProfileOwnerMixin
from comments.models import Comment
from posts.models import Post
from django.db.models import Count

class ProfileDetailView(ProfileOwnerMixin, DetailView):
	model = Profile

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['comments'] = Comment.objects.filter(post__user=self.request.user)
		
		context['total_comments'] = Post.objects.filter(slug=self.kwargs['slug']).aggregate(Count('comment'))
		# print(context['total_comments'], context['approved_comments'].count())

		return context


class ProfileUpdateView(ProfileOwnerMixin, UpdateView):
	model = Profile
	form_class = UserForm

	def form_valid(self, form, *args, **kwargs):
		user = User.objects.get(username=self.request.user)
		# print(form.cleaned_data['email'])
		user.email = form.cleaned_data['email']
		user.username = form.cleaned_data['username']
		user.save()		
		return super().form_valid(form)

class ProfileDeleteView(ProfileOwnerMixin, DeleteView):
	model = Profile
	
	def get_success_url(self, **kwargs):
		user = User.objects.get(profile__slug=self.kwargs['slug'])
		user.delete()
		logout(self.request)
		return reverse_lazy('index')









