from django.db import models
from django.urls import reverse

# Create your models here.

LANG = (
	('th', 'Thai'),
	('en', 'English'),
	('nl','Netherlands')
	)



class FileUpload(models.Model):
	source = models.FileField(upload_to='uploads', null=True, blank=True)
	destination = models.FileField(upload_to='uploads', null=True, blank=True)
	language = models.CharField(max_length=10, choices=LANG, default='th')

	def get_absolute_url(self):
		return reverse('files:file_list')