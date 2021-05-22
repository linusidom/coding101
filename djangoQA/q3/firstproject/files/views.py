from django.shortcuts import render, redirect
from files.models import FileUpload
from files.forms import FileUploadForm
from django.views.generic import ListView



from googletrans import Translator
from reportlab.lib.pagesizes import letter
from reportlab.platypus import Paragraph
from reportlab.platypus import SimpleDocTemplate

from files.fonts.fonts import *


import pdfplumber


def translate_pdf(source, lang):
	URL_COM = 'translate.googleapis.com'
	LANG = lang

	page_text = []

	page_contents = []
	
	# Initialize the Translator Service
	translator = Translator(service_urls=[URL_COM])


	# Open the PDF
	with pdfplumber.open(f"./media/uploads/{source}") as pdf:
		# For Eech Page in the PDF
		for index, p in enumerate(range(len(pdf.pages))):	
			
			# Get the Actual Page
			first_page = pdf.pages[index]

			# Extract text from pages
			text = first_page.extract_text(x_tolerance=3, y_tolerance=3)
			print(text)

			# Translate the text
			translation = translator.translate(text, dest=lang)

			
			'''
			If you want to add your own formatting between each sentence
			this is the place to do it

			Example
			result_text = translation.text.replace("-", " ").replace("W", "")

			'''



			# Append the translation / translated text into a list
			page_contents.append(translation.text)


	# AFTER WE GET THE TEXT FROM THE PDF
	name = f'./media/uploads/{LANG}_{source}'

	# Build the PDF Object
	pdf = SimpleDocTemplate(name, pagesize=letter)


	# For each item in the list of page_contents
	for text in page_contents:

		# Append it to a Paragraph Object and Append the Paragraph to object to the final text
		page_text.append(
			Paragraph(text, encoding='utf-8', style=regular))

	# Build the final PDF
	pdf.build(page_text)


	# Return the location of the final PDF to store in the Django DB
	return f'uploads/{LANG}_{source}'

# Create your views here.
class FileListView(ListView):
	model = FileUpload
	template_name = 'files/file_list.html'

def file_create(request):
	if request.method == 'POST':
		form = FileUploadForm(request.POST, request.FILES)
		if form.is_valid():
			file_upload = form.save(commit=False)
			file_upload.source = request.FILES['source']

			file_upload.save()

			file_upload.destination = translate_pdf(request.FILES['source'], file_upload.language)
			file_upload.save()
			return redirect('files:file_list')

	else:
		form = FileUploadForm()
	return render(request, 'files/file_form.html', {'form':form})



























