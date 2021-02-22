from django.shortcuts import reverse
from django.db import models

# Create your models here.
class Post(models.Model):
	title = models.CharField(max_length=100)
	message = models.TextField()

	def __str__(self):
		return f'{self.title}'
	

	def get_absolute_url(self, **kwargs):
		return reverse('posts:post_detail', kwargs={'pk':self.pk})