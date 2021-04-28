from django.shortcuts import redirect
from django.contrib.auth.mixins import LoginRequiredMixin
from cards.models import Card

class CardOwnerMixin(LoginRequiredMixin):
	"""Verify that the current user is authenticated."""
	def dispatch(self, request, *args, **kwargs):
		card = Card.objects.get(slug=kwargs['slug'])
	
		if card.user != request.user:

			return redirect('error403')
		
		if not request.user.is_authenticated:
			return self.handle_no_permission()
		
		return super().dispatch(request, *args, **kwargs)