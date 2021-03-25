from django.db import models
from django.urls import reverse
from django.contrib.auth import get_user_model
from django.db.models.signals import pre_save
from courses.utils import unique_slug

User = get_user_model()

from ckeditor_uploader.fields import RichTextUploadingField
# Create your models here.


CATEGORY = (
	('itd', 'IT Development'),
	('wd', 'Web Design'),
	('iandd', 'Illustration and Drawing'),
	('sm', 'Social Media'),
	('ps', 'PhotoShop'),
	('crypto', 'CryptoCurrencies'),
	)

def upload_path(instance, filename):
	return f'courses/{instance}/{filename}'

class Course(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=100, unique=True)
	short_description = models.CharField(max_length=200)
	long_description = RichTextUploadingField(null=True, blank=True)
	certification = RichTextUploadingField(null=True, blank=True)

	image = models.ImageField(null=True, blank=True, upload_to=upload_path)
	price = models.PositiveIntegerField()
	category = models.CharField(max_length=100, choices=CATEGORY)

	# TODO in the Future
	number_of_students = models.PositiveIntegerField(null=True, blank=True)
	course_rating = models.DecimalField(decimal_places=2, max_digits=5, null=True, blank=True)

	slug = models.SlugField(unique=True, null=True, blank=True)

	def __str__(self):
		return f'{self.name}'

	def get_absolute_url(self, **kwargs):
		return reverse('courses:course_detail', kwargs={'slug':self.slug})

	def get_category_name(self):
		for category in CATEGORY:
			if self.category == category[0]:
				return category[1]


def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Course)






















