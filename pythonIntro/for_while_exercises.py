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


# 2
# Print the following pattern
# 1 
# 1 2 
# 1 2 3 
# 1 2 3 4 
# 1 2 3 4 5

# for i in range(len(l)):
# 	print(l[:i+1])


# 3
# Reverse the following list using for loop
my_list = [10, 20, 30, 40, 50]

# for i in range(len(my_list)):
# 	print(my_list[-1-i], end=' ')


# 4
# Display -10 to -1 using for loop

# for i in range(-10, 0, 1):
# 	print(i)




# 5
# Given a list find the even numbers (hint use a Modulo Operator)
my_list1 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

# for i in my_list1:

# 	# % (Modulo operator) gives me the remainder
# 	# print(i % 2)

# 	if (i % 2 == 0):
# 		print(i)



# # 6
# # Given a list find the odd numbers (hint use a Modulo Operator)
my_list2 = [12, 15, 32, 42, 55, 75, 122, 132, 150, 180, 200]

# for i in my_list1:

# 	if (i % 2 == 1):
# 		print(i)




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



i = 0
while i < len(my_list2):

	if ( my_list2[i] % 2 == 1 ):
		print(my_list2[i])

	i += 1
	# i++





















