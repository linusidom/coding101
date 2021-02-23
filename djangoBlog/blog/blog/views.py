from django.shortcuts import render
from django.views.generic import TemplateView

def index_view(request):
	return render(request, 'index.html')

class IndexTemplateView(TemplateView):
	template_name = 'index.html'

class Error403TemplateView(TemplateView):
	template_name = 'error403.html'
	