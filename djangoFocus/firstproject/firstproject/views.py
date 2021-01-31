from django.views.generic import TemplateView

class IndexTemplateView(TemplateView):
	template_name = 'index.html'

class SearchTemplateView(TemplateView):
	template_name = 'search.html'

	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['domainName'] = self.request.GET.get('searchDomain', None)
		return context

# This is a Class Definition
class SubscribeTemplateView(TemplateView):
	
	# Inside of a class This is an Attribute
	# Outside of a class this is a Variable
	template_name = 'subscribe.html'

	# Inside of a Class This is a Method
	# Outside of a Class This is a Function
	def get_context_data(self, *args, **kwargs):
		context = super().get_context_data(*args, **kwargs)
		context['emailAddress'] = self.request.GET.get('subscribe', None)
		return context