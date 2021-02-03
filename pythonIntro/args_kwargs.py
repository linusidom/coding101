# *args
# (Arguments)
# l = [1,2,3,4,5,6]

# **kwargs
# (Keyword Arguments)
# kw = {'key1': 'val1', 'key2':'val2'}

# Unpacking
l = [1,2,3,4,5,6]
val1, val2, *args = l
# print(val1)
# print(val2)
# print(args)

class Person(object):
		
	# def __init__(self, *args, **kwargs):
	# 	print('Arguments',args)
	# 	print('Keyword Arguments',kwargs)
	# 	self.name = kwargs['name']
	# 	self.age = args[1]
	# 	self.weight = kwargs['weight']
	# 	self.job_title = kwargs['job_title']
		
	def __init__(self, name, age, weight):
		self.name = name
		self.age = age
		self.weight = weight
		self.job_title = 'Teacher'
	
	def __str__(self):
		return f"{self.name} is {self.age} years old and weighs {self.weight} kilos"

# john = Person(1,2,3,4,5, name='John', age=50, weight=100, job_title='Teacher')
# john = Person(age=35, name='John', weight=100)

# print(john)


class Employee(Person):

	def __init__(self, salary, *args, **kwargs):
		self.salary = salary
		super().__init__(*args, **kwargs)
		# print(args)
		# print(kwargs)
		# print(self.salary)


john = Employee(salary=12000, name='John', age=35, weight=100)
print(john)















