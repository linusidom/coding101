from django.urls import reverse
from django.views.generic import DeleteView
from django.shortcuts import render
from billings.omise_keys import OMISE_PUB_KEY, OMISE_SEC_KEY
from cards.models import Card
from profiles.models import Profile
from cards.mixins import CardOwnerMixin

# Create your views here.

def card_create(request):
	context = {
		'pub_key': OMISE_PUB_KEY,
	}
	return render(request, 'cards/card_create.html', context)


class CardDeleteView(CardOwnerMixin, DeleteView):
	model = Card
	def get_success_url(self, *args, **kwargs):
		card = Card.objects.get(slug=self.kwargs['slug'])
		profile = Profile.objects.get(user=card.user)
		return reverse('profiles:profile_detail', kwargs={'slug':profile.slug})