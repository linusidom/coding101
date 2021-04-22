from django.shortcuts import render
from django.views.generic import DetailView
from profiles.mixins import ProfileOwnerMixin
from profiles.models import Profile, PurchasedCourse
from billings.models import BillingProfile
from orders.models import Order
from courses.models import Course

# Create your views here.

class ProfileDetailView(ProfileOwnerMixin, DetailView):
	model = Profile

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		billing_profile, created = BillingProfile.objects.get_or_new(self.request)
		orders = Order.objects.filter(billing_profile=billing_profile)

		context['orders'] = orders

		context['my_courses'] = Course.objects.filter(user=billing_profile.user)
		# print(context['my_courses'])

		context['purchased_course'] = PurchasedCourse.objects.filter(teacher=billing_profile.user)
		# print(purchased_course)

		# DO NOT USE THIS METHOD FOR PASSING CONTEXT DATA
		# context = {
		# 	'orders':orders
		# }

		return context
