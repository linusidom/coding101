from django.db import models
from django.db.models.signals import pre_save, post_save
from django.contrib.auth import get_user_model

User = get_user_model()

from billings.utils import unique_slug


# Create your models here.


class BillingProfileManager(models.Manager):
	def get_or_new(self, request):

		created = False
		billing_profile = None

		user = request.user

		billing_profiles = self.model.objects.filter(user=user, active=True)
		if billing_profiles.count() == 1:


			billing_profile = billing_profiles.first()
			if user.is_authenticated and not billing_profile.user:
				billing_profile.user = user
				billing_profile.save()
		else:
			older_billing_profiles = self.model.objects.filter(user=user)
			if older_billing_profiles.exists():		


				older_billing_profiles.update(active = False)
			

			billing_profile = self.model.objects.create(user=user)
			created = True

		return billing_profile, created

class BillingProfile(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	active = models.BooleanField(default=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	slug = models.SlugField(unique=True)
	# customer id for OMISE
	customer_id = models.CharField(max_length=100, null=True, blank=True)

	objects = BillingProfileManager()

	def __str__(self):
		return f'{self.slug}'


def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=BillingProfile)

# Make a Billing Profile when a user is created?
def post_save_billing_profile_create(sender, instance, created, *args, **kwargs):
	if created:
		BillingProfile.objects.create(user=instance)

post_save.connect(post_save_billing_profile_create, sender=User)




























