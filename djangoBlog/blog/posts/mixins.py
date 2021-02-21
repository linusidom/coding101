from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
from posts.models import Post

class PostOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		print(self, request, args, kwargs)

		post = Post.objects.get(slug=kwargs['slug'])
		print(post.user, self.request.user)
		if post.user != self.request.user:
			return redirect('error403')
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		return super().dispatch(request, *args, **kwargs)
