# Scope

# Global Variable
i = 'This is outside the function'

def this_a_scope_example():

	# Order of Operations
	# Tries to find the variable inside the function
	# If it's not inside, it goes outside

	# Local function level


	# global allows me to change the Global Variable
	
	# global i #NOT RECOMMENDED but available


	# Local variable
	i = 'This is inside the function'


	print(i)


# Global Level
print(this_a_scope_example())
print(i)