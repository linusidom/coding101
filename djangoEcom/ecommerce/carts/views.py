from django.shortcuts import render
from carts.models import Cart
from courses.models import Course
# Create your views here.

def cart(request):

	if request.user.is_authenticated:
		cart, created = Cart.objects.get_or_create(user=request.user)
	else:

		# Check if there is a cart_id in the session already
		if request.session.get('cart_id'):
			cart = Cart.objects.get(id=request.session['cart_id'])
		else:
			cart = Cart.objects.create()

			# Set the session cart_id so we can retrieve it in the future
			request.session['cart_id'] = cart.id


	# Add items to the cart

	course = Course.objects.get(id=90)

	cart.courses.add(course)

	print(cart.courses.all())

	print(cart)
	context = {
		'cart': cart
	}



	
	return render(request, 'carts/cart.html', context)
























