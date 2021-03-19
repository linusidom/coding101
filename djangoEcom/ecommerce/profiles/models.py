from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.


class User(AbstractUser):
	pass

class Profile(models.Model):
	# about_instructor
	pass