from django.shortcuts import reverse
from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	message = models.TextField()

	# auto_now_add - When the post was created - CREATED
	created = models.DateTimeField(auto_now_add=True)

	# auto_now - every time you update the post, UPDATE
	updated = models.DateTimeField(auto_now=True)

	def __str__(self):
		return f'{self.title}'
	

	def get_absolute_url(self, **kwargs):
		return reverse('posts:post_detail', kwargs={'pk':self.pk})