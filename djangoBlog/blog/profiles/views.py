from django.shortcuts import render

# Create your views here.
from django.views.generic import DetailView
from profiles.models import Profile
from profiles.mixins import ProfileOwnerMixin
from posts.models import Post

class ProfileDetailView(ProfileOwnerMixin, DetailView):
	model = Profile

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['post_list'] = Post.objects.filter(user=self.request.user) 


		return context
