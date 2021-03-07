from django.db import models
from django.shortcuts import reverse
from posts.models import Post
from django.db.models.signals import pre_save
from django.utils.text import slugify
from comments.utils import unique_slug

from django.contrib.auth import get_user_model
User = get_user_model()

# Create your models here.

class CommentModelManager(models.Manager):
	def approved(self, post_id):
		return Comment.objects.filter(post=post_id, approval_status=True)

class Comment(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name='comments')
	message = models.TextField()
	
	# auto_now_add - When the post was created - CREATED
	created = models.DateTimeField(auto_now_add=True)

	# auto_now - every time you update the post, UPDATE
	updated = models.DateTimeField(auto_now=True)

	# Slug Field
	slug = models.SlugField(unique=True, blank=True)

	approval_status = models.BooleanField(default=False)

	objects = CommentModelManager()

	def __str__(self):
		return f'{self.post}'

	def get_absolute_url(self, **kwargs):
		# return reverse('comments:comment_list')
		return reverse('posts:post_detail', kwargs={'slug':self.post.slug})

def pre_save_add_slug(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_add_slug, sender=Comment)


















