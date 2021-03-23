from django.views.generic import TemplateView
from courses.models import Course
from django.db.models import Count


class IndexTemplateView(TemplateView):
	template_name='index.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)

		context['course_list'] = Course.objects.all()

		return context
