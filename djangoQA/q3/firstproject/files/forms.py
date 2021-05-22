from django import forms
from files.models import FileUpload

class FileUploadForm(forms.ModelForm):
	class Meta:
		model = FileUpload
		fields = ['source', 'language']
