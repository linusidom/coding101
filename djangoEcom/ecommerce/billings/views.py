from django.shortcuts import render
from billings.omise_keys import OMISE_PUB_KEY

# Create your views here.

def omise_view(request):
	print('Post', request.POST)
	context = {
		'pub_key': OMISE_PUB_KEY
	}

	return render(request, 'billings/omise_view.html', context)