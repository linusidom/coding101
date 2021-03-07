from django.shortcuts import reverse
from django.db import models
from django.db.models.signals import pre_save
from posts.utils import	unique_slug


# Create your models here.

class Post(models.Model):
	title = models.CharField(max_length=100)
	message = models.TextField()
	slug = models.SlugField(unique=True)

	def __str__(self):
		return f'{self.title}'

	def get_absolute_url(self, **kwargs):
		return reverse('posts:post_detail', kwargs={'slug':self.slug})

def pre_save_add_slug(sender, instance, *args, **kwargs):

	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_add_slug, sender=Post)
