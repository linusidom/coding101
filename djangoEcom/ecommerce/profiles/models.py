from django.db import models

from profiles.utils import unique_slug
from django.db.models.signals import pre_save, post_save
from django.contrib.auth import get_user_model

User = get_user_model()

from courses.models import Course
# Create your models here.


class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	about_teacher = models.TextField(null=True, blank=True)
	slug = models.SlugField(unique=True, null=True, blank=True)

	# This is where we will run into a problem
	courses = models.ManyToManyField(Course)

	def __str__(self):
		return f'{self.user.username}'

# pre_save

def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Profile)

# post_save
def post_save_profile_create(sender, instance, created, *args, **kwargs):
	if created:
		Profile.objects.create(user=instance)

post_save.connect(post_save_profile_create, sender=User)




























