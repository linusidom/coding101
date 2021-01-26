from django.views.generic import TemplateView

class IndexTemplateView(TemplateView):
	template_name = 'index.html'

class SearchTemplateView(TemplateView):
	template_name = 'search.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['domainName'] = self.request.GET.get('searchDomain', None)
		return context


class SubscribeTemplateView(TemplateView):
	template_name = 'subscribe.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['emailAddress'] = self.request.GET.get('subscribe', None)
		return context