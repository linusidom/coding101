from django.contrib import admin

# Register your models here.
from cards.models import Card, Charge

admin.site.register(Card)
admin.site.register(Charge)