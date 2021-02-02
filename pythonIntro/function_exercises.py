'''

### FOR LOOPS ###

'''

# 1
# Print the following pattern
# 5 4 3 2 1 
# 4 3 2 1 
# 3 2 1 
# 2 1 
# 1

l = [1,2,3,4,5]
# l.reverse()

# # for i in l:
# for i in range(len(l)):
# 	# print(i)
# 	print(l[i:])

# def exercise1(arr):
# 	# arr.reverse()
# 	arr = arr[::-1] #indexing to reverse

# 	result = []

# 	for i in range(len(arr)):
# 		# print(arr[i:])
# 		result.append(arr[i:])
# 	return result

# print(exercise1(l))

# result = exercise1(l)
# for i in result:
# 	print(i)



# 2
# Print the following pattern
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4 
# 1 2 3 4 5

# for i in range(len(l)):
# 	print(l[:i+1])

# def exercise2(arr):
# 	return [arr[:i+1] for i in range(len(arr))]

# print(exercise2(l))

# result = exercise2(l)
# for i in result:
# 	print(i)

# 3
# Reverse the following list using a function
my_list = [10, 20, 30, 40, 50]

# for i in range(len(my_list)):
# 	print(my_list[-1-i], end=' ')

# def exercise3(arr):
# 	# return [arr[-1-i] for i in range(len(arr))]
# 	return arr[::-1]

# print(exercise3(my_list))


# 4
# Display -10 to -1 using for loop

# for i in range(-10, 0, 1):
# 	print(i)

# def exercise4():
	# Much slower but easier to work with
	# return [i for i in range(-10, 0, 1)]

	# Generator - Much faster than list processing
	# return (i for i in range(-10, 0, 1))

# print(exercise4())

# Call for generator values
# for i in exercise4():
# 	print(i)


# 5
# Given a list find the even numbers (hint use a Modulo Operator)
my_list1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

# for i in my_list1:

# 	# % (Modulo operator) gives me the remainder
# 	# print(i % 2)

# 	if (i % 2 == 0):
# 		print(i)


def exercise5(arr, even_or_odd):
	return [i for i in arr if i % 2 == even_or_odd]


# # 6
# # Given a list find the odd numbers (hint use a Modulo Operator)
my_list2 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

# for i in my_list1:

# 	if (i % 2 == 1):
# 		print(i)

print(exercise5(my_list2, 1))



'''

### WHILE LOOPS ###

'''


# 1
# Print the following pattern
# 5 4 3 2 1 
# 4 3 2 1 
# 3 2 1 
# 2 1 
# 1


l = [1,2,3,4,5]
# l.reverse()

# # for i in l:
# for i in range(len(l)):
# 	# print(i)
# 	print(l[i:])

# counter = 0
# while counter < len(l):
# 	print(l[counter:])
# 	# Increment break condition
# 	counter += 1




# 2
# Print the following pattern
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4 
# 1 2 3 4 5

# for i in range(len(l)):
# 	print(l[:i+1])

# counter = 0
# while counter < len(l):
# 	print(l[:counter+1])
# 	counter += 1



# 3
# Reverse the following list using for loop
my_list = [10, 20, 30, 40, 50]


# for i in range(len(my_list)):
# 	print(my_list[-1-i], end=' ')


# i = 0
# while i < len(my_list):
# 	print(my_list[-1-i], end=' ')
# 	i += 1


# 4
# Display -10 to -1 using while loop


# for i in range(-10, 0, 1):
# 	print(i)


# Increment in a while loop
# i = -10
# while i < 0:
# 	print(i)
# 	i += 1

# # Decrement in a while loop
# i = -1
# while i > -11:
# 	print(i)
# 	i -= 1



# 5
# Given a list find the even numbers (hint use a Modulo Operator)
my_list1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

# for i in my_list1:

# 	# % (Modulo operator) gives me the remainder
# 	# print(i % 2)

# 	if (i % 2 == 0):
# 		print(i)

# i = 0
# while i < len(my_list1):

# 	if ( my_list1[i] % 2 == 0 ):
# 		print(my_list1[i])

# 	i += 1
# 	# i++


# 6
# Given a list find the odd numbers (hint use a Modulo Operator)
my_list2 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]



# i = 0
# while i < len(my_list2):

# 	if ( my_list2[i] % 2 == 1 ):
# 		print(my_list2[i])

# 	i += 1
# 	# i++





















