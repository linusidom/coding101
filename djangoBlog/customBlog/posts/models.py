from django.shortcuts import reverse
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save

from django.db.models.signals import pre_save

from django.utils.text import slugify

from posts.utils import unique_slug

from ckeditor_uploader.fields import RichTextUploadingField

User = get_user_model()


# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	message = models.TextField()
	body = RichTextUploadingField(null=True, blank=True)

	# auto_now_add - When the post was created - CREATED
	created = models.DateTimeField(auto_now_add=True)

	# auto_now - every time you update the post, UPDATE
	updated = models.DateTimeField(auto_now=True)

	# Slug Field
	slug = models.SlugField(unique=True)


	def __str__(self):
		return f'{self.title}'
	

	def get_absolute_url(self, **kwargs):
		# Original method to call a item
		# return reverse('posts:post_detail', kwargs={'pk':self.pk})

		# This is how to call an item by it's Slug value
		return reverse('posts:post_detail', kwargs={'slug':self.slug})

# Before saving the data I want to add the SlugField automatically
# Pre_save method can help us here
def pre_save_add_slug(sender, instance, *args, **kwargs):
	# print(sender)
	# print(instance, instance.title, instance.message, instance.created)
	# print(args)
	# print(kwargs)

	if not instance.slug:
		# instance.slug = slugify(instance.title)
		instance.slug = unique_slug(instance)

# @receiver(pre_save) is the same as doing the below operation

pre_save.connect(pre_save_add_slug, sender=Post)
















