from django.db import models
from django.db.models.signals import pre_save
from carts.models import Cart
from orders.utils import unique_order
from django.contrib.auth import get_user_model

User = get_user_model()
# Create your models here.



class OrderManager(models.Manager):
	def get_or_new(self, request, cart):

		created = False
		order = None

		user = request.user

		# Check if there is an active order already
		orders = Order.objects.filter(user=user, cart=cart, active=True)
		if orders.count() == 1:
			# If there is an active order, and only 1 active order, return that order
			order = orders.first()
			if user.is_authenticated and not order.user:
				order.user = user
				order.save()
		else:
			older_orders = Order.objects.filter(user=user, cart=cart)
			if older_orders.exists():		
				# If there are other orders that are active, then reset them to deactive (False)
				older_orders.update(active = False)
			
			# Create a brand new Order
			order = Order.objects.create(user=user, cart=cart)
			created = True

		return order, created
			
			
STATUSES = (
	('paid', 'PAID'),
	('ordering','ORDERING'),
	('refunded', 'REFUNDED'),
	('processing', 'PROCESSING'),
	)



class Order(models.Model):
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
	order_id = models.CharField(max_length=100, unique=True)
	total = models.IntegerField(null=True, blank=True)
	active = models.BooleanField(default=True)
	status = models.CharField(max_length=100, choices=STATUSES, default='ordering')
	created = models.DateTimeField(auto_now_add=True)
	updated = models.DateTimeField(auto_now=True)


	objects = OrderManager()

	def __str__(self):
		return f'{self.order_id}'

def pre_save_order_field(sender, instance, *args, **kwargs):
	if not instance.order_id:
		instance.order_id = unique_order(instance)

pre_save.connect(pre_save_order_field, sender=Order)


























