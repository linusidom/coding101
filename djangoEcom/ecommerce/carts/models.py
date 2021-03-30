from django.db import models
from django.db.models.signals import pre_save
from carts.utils import unique_slug
from courses.models import Course
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class CartModelManager(models.Manager):
	def get_or_new(self, request):

		created = False

		cart_id = request.session.get('cart_id', None)

		if cart_id is not None:
			cart = Cart.objects.get(id=request.session['cart_id'])

			if not cart.user and request.user.is_authenticated:
				cart.user = request.user
				cart.save()
		else:
			if request.user.is_authenticated:
				cart = Cart.objects.create(user=request.user)
				
				request.session['cart_id'] = cart.id
				created = True
				
			else:
				cart = Cart.objects.create()
				
				request.session['cart_id'] = cart.id
				created = True

		return cart, created


class Cart(models.Model):
	user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)
	courses = models.ManyToManyField(Course)
	slug = models.SlugField(unique=True)

	objects = CartModelManager()



def pre_save_slug_field(sender, instance, *args, **kwargs):
	if not instance.slug:
		instance.slug = unique_slug(instance)

pre_save.connect(pre_save_slug_field, sender=Cart)














