from django.shortcuts import render
from django.views.generic import DetailView
from profiles.mixins import ProfileOwnerMixin
from profiles.models import Profile
from billings.models import BillingProfile
from orders.models import Order

# Create your views here.

class ProfileDetailView(ProfileOwnerMixin, DetailView):
	model = Profile

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		billing_profile, created = BillingProfile.objects.get_or_new(self.request)
		orders = Order.objects.filter(billing_profile=billing_profile)

		context['orders'] = orders

		# DO NOT USE THIS METHOD FOR PASSING CONTEXT DATA
		# context = {
		# 	'orders':orders
		# }

		return context
