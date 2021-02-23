from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from posts.models import Post
from posts.forms import PostForm
from posts.mixins import PostOwnerMixin

class PostListView(ListView):
	model = Post

class PostDetailView(DetailView):
	model = Post

class PostCreateView(LoginRequiredMixin, CreateView):
	model = Post
	form_class = PostForm

	def form_valid(self, form, *args, **kwargs):
		# print(form)
		# print(self)
		# print(args)
		# print(kwargs)
		post = form.save(commit=False)

		# print(self.request.user)
		# print(post.title, post.message)

		post.user = self.request.user
		post.save()
		return super().form_valid(form)

class PostUpdateView(PostOwnerMixin, UpdateView):
	model = Post
	form_class = PostForm

class PostDeleteView(PostOwnerMixin, DeleteView):
	model = Post
	success_url = reverse_lazy('posts:post_list')
























