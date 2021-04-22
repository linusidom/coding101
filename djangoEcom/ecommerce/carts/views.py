import omise
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from carts.models import Cart
from courses.models import Course
from orders.models import Order
from billings.models import BillingProfile
from cards.models import Card, Charge
from profiles.models import Profile, PurchasedCourse
from billings.omise_keys import OMISE_PUB_KEY, OMISE_SEC_KEY
from django.db.models import Count
omise.api_secret = OMISE_SEC_KEY
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

	# Card
	card, created = Card.objects.get_or_new(request, billing_profile=billing_profile)
	# print('Card',card)

	context = {
		'cart': cart,
		'order': order,
		'billing_profile': billing_profile,
		'card': card,
		'pub_key': OMISE_PUB_KEY,
	}

	return render(request, 'carts/cart_checkout.html', context)



def place_order(request):
	cart, created = Cart.objects.get_or_new(request)
	billing_profile, created = BillingProfile.objects.get_or_new(request=request)
	order, created = Order.objects.get_or_new(request=request, cart=cart, billing_profile=billing_profile)
	card, created = Card.objects.get_or_new(request, billing_profile=billing_profile)

	# charge = omise.Charge.create(
	# 	amount=order.total * 100, #100000
	#     currency="usd",
	#     customer=billing_profile.customer_id,
	#     card=card.card_id,
	# 	)

	# print(charge.__dict__)

	# Create a charge model to show on our Admin Dashboard
	charge, created = Charge.objects.get_or_new(billing_profile=billing_profile, order=order, card=card, charge_card=True)

	# Add the course to profile
	profile = Profile.objects.get(user=request.user)

	for course in cart.courses.all():
		profile.courses.add(course)
		purchased_course= PurchasedCourse.objects.create(
			course=course,
			teacher=course.user,
			student=billing_profile.user
			)

		students = PurchasedCourse.objects.filter(teacher=course.user, course=course).aggregate(Count('student'))
		# print(students)
		course.number_of_students = students['student__count']
		course.save()

	# Cleanup the Cart and remove all items associated to the cart
	request.session['backup_order_id'] = order.order_id
	del request.session['cart_id']
	del request.session['cart_items']

	return redirect('orders:order_summary')



























