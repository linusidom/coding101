from django.db import models
from django.urls import reverse
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save, post_save
from posts.utils import unique_slug_generator


# Create your models here.


class User(AbstractUser):
	pass

class Profile(models.Model):
	user = models.OneToOneField('User', on_delete=models.CASCADE, related_name='profile')
	name = models.CharField(max_length=100, null=True, blank=True)
	slug = models.SlugField(null=True, blank=True)

	def __str__(self):
		return f'{self.user}'

	def get_absolute_url(self, **kwargs):
		return reverse('profiles:profile_detail', kwargs={'slug': self.slug})

def pre_slug(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug_generator(instance)

pre_save.connect(pre_slug, sender=Profile)

def post_create_profile(sender, instance, created, *args, **kwargs):
	if created == True:
		Profile.objects.get_or_create(user=instance, name=instance.username)

post_save.connect(post_create_profile, sender=User)

