from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from comments.models import Comment
from comments.forms import CommentForm
from posts.models import Post
from comments.mixins import CommentOwnerMixin, CommentOwnerDeleteMixin
from django.core.mail import send_mail

import threading

from django.contrib.auth import get_user_model
User = get_user_model()

class CommentListView(ListView):
	model = Comment

class CommentCreateView(LoginRequiredMixin, CreateView):
	model = Comment
	form_class = CommentForm
	# print(User)

	def form_valid(self, form, *args, **kwargs):
		# print(form)
		# print(self)
		# print(args)
		# print(kwargs)
		
		# print(self.kwargs)
		post = Post.objects.get(slug=self.kwargs['slug'])
		

		comment = form.save(commit=False)
		# print('My New Comment', comment.message)
		# print('My post', post)

		comment.post = post
		# print('Current Logged in User', self.request.user)
		comment.user = self.request.user
		comment.save()

		# This is one way
		# self.new_comment_email(self.request.user, comment, post)


		# Or We can use threading
		# x = threading.Thread(target=self.new_comment_email, 
		# 					args=(self.request.user, comment, post))
		# x.start()

		return super().form_valid(form)

	def new_comment_email(self, user, comment, post):
		
		user = User.objects.get(username=user)

		subject = 'You have a new Comment'
		
		# email = request.POST.get('email')
		message = f'''
		You have a new Comment on Post {post.title}.

		The Comment Message is as follows:\n
		{comment.message}

		<a href="http://127.0.0.1:8000/profile/profile_detail/{user.username}">Please click here to approve this comment.</a>
		'''

		
		send_mail(
			subject=subject,
			message=message,
			from_email='YOUREMAIL',
			recipient_list=[user.email],
			fail_silently=False, html_message=message)



class CommentUpdateView(CommentOwnerMixin, UpdateView):
	model = Comment
	form_class = CommentForm

class CommentDeleteView(CommentOwnerDeleteMixin, DeleteView):
	model = Comment

	# I want to go back to the Post Detail
	def get_success_url(self, **kwargs):
		comment = Comment.objects.get(slug=self.kwargs['slug'])
		# print('\n', comment, '\n')

		return reverse_lazy('posts:post_detail', kwargs={'slug':comment.post.slug})





















