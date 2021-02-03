


# Wrapper Function AKA decorator function
# I want to run code simultaneously alongside my original function
def decorator(func):
	def wrapper():
		print('I am before the actual function')

		func()

		print('I am after the actual function')
	return wrapper


def function_needs_decorator():
	print('I need a decorator')

# Invoke the decorator

# ACTUAL DECORATOR INVOKING
# needs_decorator = decorator(function_needs_decorator)
# needs_decorator()

# Syntax that you normally see
# INVOKING changes to the following


# def function_test():
# 	print("I shouldn't be here")


# @decorator
# def function_needs_decorator():
# 	print('I need a decorator')

# function_needs_decorator()
# function_test()


import datetime

def new_decorator(func):
	def wrapper(*args, **kwargs):
		start_time = datetime.datetime.now()
		print(func.__name__)
		func(*args, **kwargs)
		end_time = datetime.datetime.now()
		print(f"Run Time: {end_time - start_time}")
	return wrapper


# Compare the time difference to process a
# FOR LOOP vs List Comprehension

times = 50000

@new_decorator
def for_loop(times):
	result = []
	for i in range(times):
		result.append(i)
	return result

@new_decorator
def list_comprehension(times):
	return [i for i in range(times)]
	# start_time = datetime.datetime.now()
	# result = [i for i in range(times)]
	# end_time = datetime.datetime.now()
	# print(f"Run Time: {end_time - start_time}")

	# return result


for_loop(times)
list_comprehension(times)






















