from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from orders.models import Order
# Create your views here.

def order_summary(request):
	order_id = request.session.get('backup_order_id', None)

	order = Order.objects.get(order_id= order_id)

	context = {

		'order': order,

	}

	return render(request, 'orders/order_summary.html', context)