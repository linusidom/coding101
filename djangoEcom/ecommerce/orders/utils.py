# Check if the slug value exists already...

import random
import string



def random_string_generator(chars=10, letters=string.ascii_lowercase + string.ascii_uppercase + string.digits):
	return ( ''.join(random.choice(letters) for i in range(10)))


def unique_order(instance, new_order=None):

	print(new_order)
	if new_order:
		order = new_order
	else:
		order = random_string_generator(chars=10)


	Order = instance.__class__
	# print(Post)
	query = Order.objects.filter(order_id=order).exists()
	# print(query)
	if query:
		print('This order exists already')
		order = random_string_generator(chars=10)

		return unique_order(instance, new_order=order)
	return order
