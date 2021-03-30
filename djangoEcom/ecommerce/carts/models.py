from django.db import models
from django.db.models.signals import pre_save
from carts.utils import unique_slug
from courses.models import Course
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Cart(models.Model):
	user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
	courses = models.ManyToManyField(Course)
	slug = models.SlugField(unique=True)

def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Cart)