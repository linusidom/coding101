list1 = [50, 83, 87, 86, 69, 77, 60, 87, 92, 12]
list2 = [37, 39, 50, 7, 87, 15, 78, 79, 46, 23]
list3 = [36, 21, 24, 89, 48, 89, 15, 1, 0, 66]




# list1_even_numbers = [i for i in list1 if i % 2 == 0]
# list2_even_numbers = [i for i in list2 if i % 2 == 0]
# list3_even_numbers = [i for i in list3 if i % 2 == 0]

# # for i in list1:
# # 	if i % 2 == 0:
# # 		list1_even_numbers.append(i)

# print(list1_even_numbers)


# # for i in list2:
# # 	if i % 2 == 0:
# # 		list2_even_numbers.append(i)

# print(list2_even_numbers)

# # for i in list3:
# # 	if i % 2 == 0:
# # 		list3_even_numbers.append(i)

# print(list3_even_numbers)



# Functions
# all functions start with def
# inside parentheses, parameters or variables I want to evaluate



# def name_of_function():
# 	print('This is a function')
# 	# return None #default statement at the end of every function unless otherwise specified
# 	return 'This is a function'

# name_of_function()
# print(name_of_function())

# output_of_return = name_of_function()
# print(output_of_return)

# def even_numbers(arr):
# 	return [i for i in arr if i % 2 == 0]

# print(even_numbers(list1))
# print(even_numbers(list2))
# print(even_numbers(list3))

# Functions allow our code to be modular

# Functions are just a wrapper to export or re-use bits of code
def even_numbers(arr):
	list1_even_numbers = []

	for i in arr:
		if i % 2 == 0:
			list1_even_numbers.append(i)

	return list1_even_numbers

print(even_numbers(list1))





























