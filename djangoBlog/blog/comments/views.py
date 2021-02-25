from django.shortcuts import render

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from comments.models import Comment
from comments.forms import CommentForm
from posts.models import Post

class CommentListView(ListView):
	model = Comment

class CommentCreateView(CreateView):
	model = Comment
	form_class = CommentForm

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
		comment.save()
		return super().form_valid(form)