from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, UpdateView, CreateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth import get_user_model
from posts.models import Post
from posts.forms import PostForm
from posts.mixins import PostOwnerMixin

from profiles.models import Profile
from comments.models import Comment

from django.db.models import Count, Q


User = get_user_model()

class PostListView(ListView):
	model = Post
	queryset = Post.objects.annotate(napproved_comments=Count('comment', filter=Q(comment__approved=True)))

	for query in queryset:
		print(query.__dict__)

	# def get_context_data(self, *args, **kwargs):
	# 	context = super().get_context_data(*args, **kwargs)

	# 	# Get all the comments for this post

	# 	context['approved_comments'] = Comment.objects.values('post_id').annotate(c_count=Count('post_id')).filter(approved=True)

		
	# 	# context['total_comments'] = Post.objects.filter(slug=self.kwargs['slug']).aggregate(Count('comment'))
	# 	# print(context['total_comments'], context['approved_comments'].count())

	# 	return context

class PostDetailView(DetailView):
	model = Post

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		# Get all the comments for this post
		# print(context['post'])
		context['approved_comments'] = Comment.objects.filter(post=context['post'].id).filter(approved=True)
		
		context['total_comments'] = Post.objects.filter(slug=self.kwargs['slug']).aggregate(Count('comment'))
		# print(context['total_comments'], context['approved_comments'].count())

		return context

class PostCreateView(LoginRequiredMixin, CreateView):
	model = Post
	form_class = PostForm
	

	def form_valid(self, form, *args, **kwargs):
		user = User.objects.get(username=self.request.user)
		post = form.save(commit=False)
		post.user = user
		post.save()
		return super().form_valid(form)

class PostUpdateView(PostOwnerMixin, UpdateView):
	model = Post
	form_class = PostForm

class PostDeleteView(PostOwnerMixin, DeleteView):
	model = Post
	success_url = reverse_lazy('posts:post_list')



def post_search(request):
	query = request.GET.get('query', None)

	post = Post.objects.filter(title__icontains=query)
	context = {
		'post_list': post
	}

	return render(request, 'posts/post_list.html', context)














