from django.db import models
from django.db.models.signals import pre_save
from cards.utils import unique_slug
from billings.models import BillingProfile
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.


class CardManager(models.Manager):

	def get_or_new(self, request, billing_profile, card=None):

		card_obj = None
		created = False

		# Get an existing card based on Billing Profile
		if card == None:
			cards = self.model.objects.filter(billing_profile=billing_profile, default=True)
			if cards.exists():
				card_obj = cards.first()
		else:
			# Get an existing card from the last 4 digits
			last_digits = self.model.objects.filter(last_digits=card.last_digits)
			if last_digits.exists():
				card_obj = last_digits.first()
			
			# Create a new card
			else:
				card_obj = self.model.objects.create(
					user = request.user,
					billing_profile=billing_profile,
					card_id = card.id,
					last_digits=card.last_digits,
					brand=card.brand,
					exp_month=card.expiration_month,
					exp_year=card.expiration_year
					)
				created = True
		return card_obj, created
	

	


class Card(models.Model):
	user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
	billing_profile = models.ForeignKey(BillingProfile, on_delete=models.SET_NULL, null=True, blank=True)
	card_id = models.CharField(max_length=100, null=True, blank=True)
	last_digits = models.CharField(max_length=100, null=True, blank=True)
	brand = models.CharField(max_length=100, null=True, blank=True)
	exp_month = models.CharField(max_length=100, null=True, blank=True)
	exp_year = models.CharField(max_length=100, null=True, blank=True)
	default = models.BooleanField(default=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	slug = models.SlugField(unique=True)

	objects = CardManager()

def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Card)
