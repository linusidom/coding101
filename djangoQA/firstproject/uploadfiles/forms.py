from django import forms
from uploadfiles.models import Image

class ImageForm(forms.ModelForm):
	class Meta:
		model = Image
		fields = ['image']


		widgets = {
			'image' : forms.ClearableFileInput(attrs={'multiple': True})
		}

	def clean_image(self):
		data = self.cleaned_data['image']

		DATA_TYPES = ['application/octet-stream', 'image/jpeg']

		# check if the content type is what we expect
		content_type = data.content_type

		print('CONTENT TYPE',content_type)

		if content_type in DATA_TYPES:
			return data
		else:
			raise forms.ValidationError('Invalid content type')