from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model
from posts.models import Post
from comments.models import Comment
from comments.forms import CommentForm
from comments.mixins import CommentOwnerMixin

User = get_user_model()



class CommentListView(LoginRequiredMixin, ListView):
	model = Comment

class CommentDetailView(LoginRequiredMixin, DetailView):
	model = Comment

class CommentCreateView(LoginRequiredMixin, CreateView):
	model = Comment
	form_class = CommentForm


	def form_valid(self, form, *args, **kwargs):
		# print(self.kwargs['slug'])
		# get the original post
		post = Post.objects.get(slug=self.kwargs['slug'])

		# Get the user
		user = User.objects.get(username=self.request.user)

		comment = form.save(commit=False)

		comment.post = post
		comment.user = user
		comment.save()

		return super().form_valid(form)


class CommentUpdateView(CommentOwnerMixin, UpdateView):
	model = Comment
	form_class = CommentForm

class CommentDeleteView(CommentOwnerMixin, DeleteView):
	model = Comment
	# success_url = reverse_lazy('posts:post_list')

	def get_success_url(self):
		comment = Comment.objects.get(slug=self.kwargs['slug'])
		return reverse_lazy('posts:post_detail', kwargs={'slug': comment.post.slug})














