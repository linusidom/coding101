from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from posts.utils import unique_slug_generator

User = get_user_model()



# Create your models here.
class Post(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	message = models.TextField()
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	slug = models.SlugField(null=True, blank=True)



	def __str__(self):
		return f'{self.title}'

	def get_absolute_url(self):
		return reverse('posts:post_detail', kwargs={'slug':self.slug})


def pre_slug(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_slug, sender=Post)