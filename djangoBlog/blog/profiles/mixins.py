from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from profiles.models import Profile

class ProfileOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		# print(post.user, self.request.user)
		
		# print(self.request.user,  self.request.user.profile.slug, kwargs)

		if kwargs['slug'] != self.request.user.profile.slug:
			return redirect('error403')
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		return super().dispatch(request, *args, **kwargs)
