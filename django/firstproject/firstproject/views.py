from django.shortcuts import render

def index(request):
	return render(request, 'index.html')

# def firstapp_index(request):
# 	return render(request, 'firstapp_index.html')	

def single_page_app(request):
	return render(request, 'single_page_app.html')
