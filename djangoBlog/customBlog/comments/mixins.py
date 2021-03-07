from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from posts.models import Post
from comments.models import Comment

class CommentOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		# print(self)
		# print(request.user)
		# print(args)
		# print(kwargs)

		# If the comment.user is the same as request.user
		# Then allow or if not the same go to error403

		# print(self.kwargs)
		# print(kwargs)

		comment = Comment.objects.get(slug=kwargs['slug'])

		# print(comment.user, request.user)

		if comment.user != request.user:
			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		# otherwise let them go ahead
		return super().dispatch(request, *args, **kwargs)


class CommentOwnerDeleteMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		# print(self)
		# print(request.user)
		# print(args)
		# print(kwargs)

		# If the comment.user is the same as request.user
		# Then allow or if not the same go to error403

		# print(self.kwargs)
		# print(kwargs)

		comment = Comment.objects.get(slug=kwargs['slug'])

		# Get the post
		post = Post.objects.get(id=comment.post.id)
		# print(post.comments.all())
		# print(comment.user, request.user)

		# If the comment is in the post.comments.all
		# then we want to have permission to delete

		if comment not in post.comments.all():
			# print('comment in post')
			return redirect('error403')

		if comment.post.user != request.user:
			# print('comment user not matching request user')
			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		# otherwise let them go ahead
		return super().dispatch(request, *args, **kwargs)















