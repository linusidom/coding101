from django.db import models
from django.contrib.auth import get_user_model
from django.urls.base import reverse

User = get_user_model()
# Create your models here.
class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f'{self.name}'

    def get_absolute_url(self, *args, **kwargs):
        return reverse('firstapp:post_list')