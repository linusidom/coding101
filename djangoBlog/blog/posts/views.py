from django.shortcuts import render
from django.urls import reverse_lazy

# Create your views here.
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from django.contrib.auth.mixins import LoginRequiredMixin
from posts.models import Post
from posts.forms import PostForm
from posts.mixins import PostOwnerMixin

from comments.models import Comment

class PostListView(ListView):
	model = Post

class PostDetailView(DetailView):
	model = Post


	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		# post = Post.objects.get(pk=11)
		# print('\nCurrent Post',post, '\n')

		# print(dir(post))
		# print(dir(post.comment_set))
		# print(post.comment_set.all())
		# print(post.comments.all())

		# print('This is my Post', context['post'])

		# context['approved_comments'] = Comment.objects.filter(post=context['post'].id, approval_status=True)
		context['approved_comments'] = Comment.objects.approved(context['post'].id)
		return context




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



def post_search(request):
	query = request.GET.get('query', None)
	# print('Query from Search:', query)
	post_list = []

	if query is not None:
		post_list = Post.objects.filter(title__icontains=query)

	context = {
		'post_list': post_list,
		'query': query,
	}


	return render(request, 'posts/post_list.html', context)
	
	
































