from django.views.generic import TemplateView
from posts.models import Post
# Index View

class IndexTemplateView(TemplateView):
	template_name = 'index.html'

	def get_context_data(self, *args, **kwarsg):
		context = super().get_context_data(*args, **kwarsg)
		context['post_list'] = Post.objects.all()
		return context

class AboutTemplateView(TemplateView):
	template_name = 'about.html'

class ContactTemplateView(TemplateView):
	template_name = 'contact.html'