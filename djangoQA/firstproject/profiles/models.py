from django.urls import reverse
from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save

User = get_user_model()

class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	image = models.ImageField(upload_to='profiles', null=True, blank=True)

	def __str__(self):
		return f'{self.user}'

	def get_absolute_url(self):
		return reverse('profiles:profile')

# AUTO CREATE Profile when user is CREATED
# POST SAVE
def post_save_profile_create(sender, instance, created, *args, **kwargs):
	# print(sender)
	# print(instance)
	# print(created)
	# print(args)
	# print(kwargs)

	if created:
		Profile.objects.create(user=instance)

post_save.connect(post_save_profile_create, sender=User)