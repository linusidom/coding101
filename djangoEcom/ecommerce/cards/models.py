import omise
from django.db import models
from django.db.models.signals import pre_save
from cards.utils import unique_slug
from billings.models import BillingProfile
from django.contrib.auth import get_user_model

User = get_user_model()
from billings.omise_keys import OMISE_PUB_KEY, OMISE_SEC_KEY

omise.api_secret = OMISE_SEC_KEY
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




class ChargeManager(models.Manager):
	def get_or_new(self, billing_profile, order=None, card=None, charge_card=False):

		charge = None
		created = None

		if charge_card == True:
			if order is not None and card is not None:
				omise_charge = omise.Charge.create(
					amount=order.total * 100, #100000
				    currency="usd",
				    customer=billing_profile.customer_id,
				    card=card.card_id,
					)

				charge = self.model.objects.create(
					user = billing_profile.user,
					billing_profile = billing_profile,
					card = card,
					charge_id = omise_charge.id,
					paid = omise_charge.paid,
					amount = omise_charge.amount,
					net = omise_charge.net,
					fee = omise_charge.fee,
					fee_vat = omise_charge.fee_vat,
					funding_amount = omise_charge.funding_amount,
					)

				created = True
			else:
				return 'Error Need Order and Card'

		else:
			charge = self.model.objects.filter(billing_profile=billing_profile)

		return charge, created




class Charge(models.Model):
	user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
	billing_profile = models.ForeignKey(BillingProfile, on_delete=models.SET_NULL, null=True, blank=True)
	card = models.ForeignKey(Card, on_delete=models.SET_NULL, null=True, blank=True)
	charge_id = models.CharField(max_length=100, null=True, blank=True)
	paid = models.BooleanField(null=True, blank=True)
	amount = models.IntegerField(null=True, blank=True)
	net = models.IntegerField(null=True, blank=True)
	fee = models.IntegerField(null=True, blank=True)
	fee_vat = models.IntegerField(null=True, blank=True)
	funding_amount = models.IntegerField(null=True, blank=True)
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)
	slug = models.SlugField(unique=True)

	objects = ChargeManager()

	def __str__(self):
		return f'{self.slug}'


def pre_save_charge_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_charge_slug_field, sender=Charge)




















