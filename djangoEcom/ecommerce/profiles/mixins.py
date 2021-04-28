from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from profiles.models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()

class ProfileOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		profile = Profile.objects.get(slug=kwargs['slug'])

		if profile.user != request.user:
			# return self.handle_no_permission()
			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		# otherwise let them go ahead
		return super().dispatch(request, *args, **kwargs)

class ProfilePKOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		profile = Profile.objects.get(pk=kwargs['pk'])

		if profile.user != request.user:
			# return self.handle_no_permission()
			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		# otherwise let them go ahead
		return super().dispatch(request, *args, **kwargs)


