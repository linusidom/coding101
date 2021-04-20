from django.shortcuts import render
from billings.omise_keys import OMISE_PUB_KEY, OMISE_SEC_KEY

# Create your views here.

def card_create(request):
	context = {
		'pub_key': OMISE_PUB_KEY,
	}
	return render(request, 'cards/card_create.html', context)