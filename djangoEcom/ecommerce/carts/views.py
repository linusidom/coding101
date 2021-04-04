from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from carts.models import Cart
from courses.models import Course
from orders.models import Order
from billings.models import BillingProfile
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


@login_required
def cart_checkout(request):
	
	cart, created = Cart.objects.get_or_new(request)

	# Billing Profile or not?
	billing_profile, created = BillingProfile.objects.get_or_new(request=request)

	# Order???
	order, created = Order.objects.get_or_new(request=request, cart=cart, billing_profile=billing_profile)



	context = {
		'cart': cart,
		'order': order,
		'billing_profile': billing_profile
	}

	return render(request, 'carts/cart_checkout.html', context)
































