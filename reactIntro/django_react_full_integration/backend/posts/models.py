from django.db import models

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'{self.title}'