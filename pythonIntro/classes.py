john_name = 'John'
john_age = 35
john_weight = 80

# print(john_name, john_age, john_weight)

john = {
	'name': 'John',
	'age': 35,
	'weight': 80
}

# print(type(john))

# I want a better way to create people
# Create a function to create people

def create_person(name, age, weight):
	return {
	'name': name,
	'age': age,
	'weight': weight
}

# jane = create_person('Jane', 25, 45)
# print(type(jane))
# jane = create_person()
# bob = create_person('Bob', 30, 90)
# print(bob)

# Get the ages of all the people we created

def get_age(data):
	return f"{data['name']} is {data['age']} years old"

# print(get_age(john))
# print(get_age(jane))
# print(get_age(bob))

# I want to change the ages of the people

def update_age(data, new_age):
	data['age'] = new_age
	return data

# print('Before Update Age', jane)
# update_age(jane, 30)
# print('After Update Age', jane)


# We can wrap all of our variables and functions into 
# CLASSES

# Classes are just a nice wrapper to keep things together
# They allow for better syntax and easier functionality


# This is a class of type object called Person



class Person(object):
		
	# The class wrapper is very powerful but that means
	# We have to create every method for it

	# In order to access the local SCOPE of a class
	# We need to use SELF

	# Variables are known as Attributes
	job_title = 'Teacher'

	# nameTest = 'TestName'
	# ageTest = 'TestAge'
	# weightTest = 'TestWeight'


	# Functions are known as Method

	def __init__(self, name, age, weight):
		self.name = name
		self.age = age
		self.weight = weight

	# We have to create a print function
	def __str__(self):
		return f"{self.name} is {self.age} years old and weighs {self.weight} kilos and is a {self.job_title}"


	def get_age(self):
		return f"{self.name} is {self.age} years old"

	def update_age(self, new_age):
		self.age = new_age
		return self.age


steve = Person('Steve', 45, 100)
print(steve)

print(steve.get_age())

print(steve.update_age(55))


# print(type(new_class))
print(dir(steve))
print(help(steve))


# a = 5
# print(type(a))
# print(dir(a))






























