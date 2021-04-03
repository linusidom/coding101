from django.conf import settings
from allauth.account.adapter import DefaultAccountAdapter

class MyAccountAdapter(DefaultAccountAdapter):

	def get_login_redirect_url(self, request):
		next_url = request.POST.get('next', 'index')
		if next_url:
			return next_url
