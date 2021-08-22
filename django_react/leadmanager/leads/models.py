from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Lead(models.Model):
    # Owner is really the user object
    owner = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    name = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(max_length=100, unique=True)
    message = models.CharField(max_length=100, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name}'