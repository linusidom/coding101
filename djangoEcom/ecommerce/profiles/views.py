from django.shortcuts import render
from django.views.generic import DetailView, UpdateView
from profiles.mixins import ProfileOwnerMixin, ProfilePKOwnerMixin
from profiles.models import Profile, PurchasedCourse
from profiles.forms import UserForm
from billings.models import BillingProfile
from orders.models import Order
from courses.models import Course
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.contrib.auth import get_user_model

User = get_user_model()

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

		# context['purchased_course'] = PurchasedCourse.objects.filter(teacher=billing_profile.user)
		context['purchased_course'] = PurchasedCourse.objects.filter(teacher=billing_profile.user).values_list('course__name', 'course__price', 'purchased_date')
		# print(context['purchased_course'])

		context['purchased_course_json'] = json.dumps(list(context['purchased_course']), cls=DjangoJSONEncoder)
		# print(purchased_course_json)
		context['billing_profile'] = billing_profile
		# print(purchased_course)

		# DO NOT USE THIS METHOD FOR PASSING CONTEXT DATA
		# context = {
		# 	'orders':orders
		# }

		return context

class ProfileUpdateView(ProfilePKOwnerMixin, UpdateView):
	model = User
	form_class = UserForm
	template_name = 'profiles/profile_form.html'





















