from django.db import models
from django.shortcuts import reverse
from posts.models import Post
from django.db.models.signals import pre_save
from django.utils.text import slugify
from comments.utils import unique_slug
# Create your models here.

class Comment(models.Model):
	post = models.ForeignKey(Post, on_delete=models.CASCADE)
	message = models.TextField()
	
	# auto_now_add - When the post was created - CREATED
	created = models.DateTimeField(auto_now_add=True)

	# auto_now - every time you update the post, UPDATE
	updated = models.DateTimeField(auto_now=True)

	# Slug Field
	slug = models.SlugField(unique=True, blank=True)

	def __str__(self):
		return f'{self.post}'

	def get_absolute_url(self, **kwargs):
		return reverse('comments:comment_list')

def pre_save_add_slug(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_add_slug, sender=Comment)


















