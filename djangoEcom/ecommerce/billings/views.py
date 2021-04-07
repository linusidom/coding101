import omise
import json

from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from billings.models import BillingProfile
from cards.models import Card
from billings.omise_keys import OMISE_PUB_KEY, OMISE_SEC_KEY

omise.api_secret = OMISE_SEC_KEY

# Create your views here.

@login_required
def omise_view(request):
	print('Post', request.POST)
	context = {
		'pub_key': OMISE_PUB_KEY
	}

	return render(request, 'billings/omise_view.html', context)

@login_required
def omise_processor(request):
	# print('BODY DATA', request.body)
	token = json.loads(request.body)
	# print('Token', token)
	
	billing_profile, created = BillingProfile.objects.get_or_new(request)

	customer = omise.Customer.retrieve(billing_profile.customer_id)
	# print('Omise Customer Object', customer)
	card = customer.update(card=token)

	# print(card.__dict__)
	cards = customer.cards

	for card in cards:
		# print('********\n', card)
		card_obj, created = Card.objects.get_or_new(request=request, billing_profile=billing_profile, card=card)
		# print('Card Obj', card_obj)
	return JsonResponse({'status': 'OKAY'})




















	