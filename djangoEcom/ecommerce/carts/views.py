from django.shortcuts import render, redirect
from carts.models import Cart
from courses.models import Course
# Create your views here.

def cart(request):
	cart, created = Cart.objects.get_or_new(request)

	context = {
		'cart': cart
	}
	return render(request, 'carts/cart.html', context)

def cart_update(request, slug):

	course = Course.objects.get(slug=slug)
	cart, created = Cart.objects.get_or_new(request)

	# Remove or Add items form ManyToMany Field
	if course in cart.courses.all():
		cart.courses.remove(course)
	else:
		cart.courses.add(course)	
	
	request.session['cart_items'] = cart.courses.count()

	context = {
		'cart': cart
	}

	return redirect('carts:cart')






















