from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import redirect
# from posts.models import Post
from comments.models import Comment

class CommentOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		# print(self, request, args, kwargs)

		comment = Comment.objects.get(slug=kwargs['slug'])
		# print(comment.user, self.request.user)
		
		# Owner or the post 
		print('Post Owner', comment.user, comment.post.user)


		# If post owner
		if comment.post.user == self.request.user:
			return super().dispatch(request, *args, **kwargs)


		if (comment.user != self.request.user):
			return redirect('error403')
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		return super().dispatch(request, *args, **kwargs)
