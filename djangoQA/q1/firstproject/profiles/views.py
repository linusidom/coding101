from django.shortcuts import render
from django.views.generic import ListView, UpdateView
from profiles.models import Profile
from profiles.forms import ProfileForm


class ProfileListView(ListView):
	model = Profile
	template_name = 'profiles/profile_detail.html'

	def get_queryset(self):
		return Profile.objects.filter(user__username=self.request.user)

class ProfileUpdateView(UpdateView):
	model = Profile
	form_class = ProfileForm