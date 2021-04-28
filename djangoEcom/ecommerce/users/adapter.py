from django.urls import reverse
from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter

class MyAccountAdapter(DefaultAccountAdapter):

	def get_login_redirect_url(self, request):
		next_url = request.POST.get('next', None)
		if next_url is not None:
			return next_url
		else:
			return reverse('index')
