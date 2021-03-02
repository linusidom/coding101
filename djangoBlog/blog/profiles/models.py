from django.shortcuts import reverse
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save, post_save
from profiles.utils import unique_slug


User = get_user_model()


class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
	slug = models.SlugField(unique=True)

	def __str__(self):
		return f'{self.slug}'

	def get_absolute_url(self, **kwargs):
		return reverse('profiles:profile_detail', kwargs={'slug':self.slug})

	
def pre_save_add_slug(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_add_slug, sender=Profile)


# After the User is created I want to create a Profile as well

def post_save_create_profile(sender, instance, created, *args, **kwargs):
	if created:
		Profile.objects.create(user=instance)

post_save.connect(post_save_create_profile, sender=User)