from django.shortcuts import render
from carts.models import Cart
from courses.models import Course
# Create your views here.

def cart(request):



	cart, created = Cart.objects.get_or_new(request)

	# Add items to the cart

	course = Course.objects.get(id=90)

	cart.courses.add(course)
	
	print(cart.courses.all())

	print(cart)
	context = {
		'cart': cart
	}



	
	return render(request, 'carts/cart.html', context)
























