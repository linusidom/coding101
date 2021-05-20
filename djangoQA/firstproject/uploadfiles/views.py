from django.shortcuts import render, redirect
from django.views.generic import ListView
from uploadfiles.models import Image
from uploadfiles.forms import ImageForm
# Create your views here.

class ImageListView(ListView):
	model = Image

def image_create(request):
	if request.method == 'POST':
		form = ImageForm(request.POST, request.FILES)
		files = request.FILES.getlist('image')
		if form.is_valid():
			for file in files:
				Image.objects.create(image=file)
			return redirect('uploadfiles:image_list')
	else:
		form = ImageForm()

	return render(request, 'uploadfiles/image_form.html', {'form':form})