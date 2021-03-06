from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from posts.models import Post

class PostOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		# print(self)
		# print(request.user)
		# print(args)
		# print(kwargs)

		# Get the Post
		post = Post.objects.get(slug=kwargs['slug'])

		# print(post)
		# print(request.user, post.user)

		# Check if the post user == logged in user
		# If they are not the same
		
		# then kick them out
		if post.user != request.user:
			# return self.handle_no_permission()
			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		# otherwise let them go ahead
		return super().dispatch(request, *args, **kwargs)
