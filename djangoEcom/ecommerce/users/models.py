from django.urls import reverse
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
	is_teacher = models.BooleanField(default=False)
	# email = models.EmailField(unique=True)

	def get_absolute_url(self, **kwargs):
		return reverse('profiles:profile_detail', kwargs={'slug':self.profile.slug})

	def make_teacher(self):
		self.is_teacher = True
		self.save()
		