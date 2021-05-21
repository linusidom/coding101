from django.urls import reverse
from django.db import models

# Create your models here.


TYPES = (
	('a','CAT A'),
	('b','CAT B'),
	('c','CAT C'),
	)

class Product(models.Model):
	name = models.CharField(max_length=100, null=True, blank=True)
	category = models.CharField(max_length=100, choices=TYPES, default='a', null=True, blank=True)

	def __str__(self):
		return f'{self.name}'

	def get_absolute_url(self):
		return reverse('products:product_list')