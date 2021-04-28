from django.urls import reverse
from django.views.generic import TemplateView
from django.contrib.auth.mixins import LoginRequiredMixin
from courses.models import Course
from django.db.models import Count
from django.contrib.auth import get_user_model
from carts.models import Cart
from allauth.account.views import PasswordChangeView

User = get_user_model()

class IndexTemplateView(TemplateView):
	template_name='index.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['course_list'] = Course.objects.all()

		cart, created = Cart.objects.get_or_new(self.request)

		return context

class BecomeTeacherTemplateView(LoginRequiredMixin, TemplateView):
	template_name='become_teacher.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		# get the current user???
		user = User.objects.get(username=self.request.user)
		user.make_teacher()
		# user.is_teacher = True
		# user.save()
		return context



class CustomPasswordChangeView(LoginRequiredMixin, PasswordChangeView):
	def get_success_url(self, *args, **kwargs):
		slug = self.kwargs['slug']
		return reverse('profiles:profile_detail', kwargs={'slug':slug})





























