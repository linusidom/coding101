from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.


CATEGORY = (
	('itd', 'IT Development'),
	('wd', 'Web Design'),
	('iandd', 'Illustration and Drawing'),
	('sm', 'Social Media'),
	('ps', 'PhotoShop'),
	('crypto', 'CryptoCurrencies'),
	)

class Course(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=100)
	short_description = models.CharField(max_length=200)
	long_description = models.TextField()
	certification = models.TextField()

	price = models.PositiveIntegerField()
	category = models.CharField(max_length=100, choices=CATEGORY)

	# TODO in the Future
	number_of_students = models.PositiveIntegerField(null=True, blank=True)
	course_rating = models.DecimalField(decimal_places=2, max_digits=5, null=True, blank=True)


	def __str__(self):
		return f'{self.name}'

	def get_absolute_url(self, **kwargs):
		pass

	def get_category_name(self):
		pass	

























