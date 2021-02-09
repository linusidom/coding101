from django.db import models

# Create your models here.
class Book(models.Model):
	title = models.CharField(max_length=200, null=True, blank=True)
	author = models.CharField(max_length=200, null=True, blank=True)
	published_date = models.DateField()
	number_of_copies = models.IntegerField()

	def __str__(self):
		return f'{self.id}. {self.title} written by {self.author}, {self.published_date}'