from django.db import models
from django.db.models.signals import pre_save
from courses.models import Course
from lessons.utils import unique_slug
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Lesson(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	name = models.CharField(max_length=100)
	short_description = models.CharField(max_length=100)
	long_description = RichTextUploadingField()
	completed = models.BooleanField(default=False)
	slug = models.SlugField(unique=True)

	def __str__(self):
		return f'{self.name}'

def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Lesson)