# For Loops

l = [1,2,3,4,5]

# What numbers are greater than 3

# For loop initialization

# For Each item in 'l' (my list) do something
# for item in l:

	# For loop constraints or conditions
	
	# If Statement initialization and condition
	# if item > 3:

		# If statement results
		# print(item)
	# print(item)

# my_list = [1,2,3,4,5]

# for each_item in my_list:
# 	print(each_item)

# Range Command in for loops

# Range (start, stop, step)
# for i in range(1,6,2):
# 	print(i)


# my_list = [1,2,3,4,5,6,7,8,9]

# for item in my_list:
# 	if item < 3 and item > 0:
# 		print(f'{item} is less than 3')
# 	elif item >= 3 and item <= 7:
# 		print(f'{item} is greater than or equal to 3 and less than or equal to 7')
# 	else:
# 		print(f'{item} is greater than 7')



# List Comprehension Examples

# l = [1,2,3,4,5]

# # Much nicer and less memory consumption
# my_list_comprehension = [item for item in l if item > 3]

# # print(item)
# print('List Comprehension',my_list_comprehension)


# This method takes up additional memory
# for item in l:
# 	if item > 3:
# 		print(item)
# print('This item is still in memory',item)



# While


# While loops need a break condition

# Think about the break condition first before creating the while loop

# while (break condition has NOT been met):
	# do something

counter = 0 # This line is INCREDIBLY Important because it tells us when to STOP!
while counter < 10:
	print('Before increment',counter)
	counter += 1
	# print('After increment',counter, '\n')


# When do I use a While loop?
	# When I want to process something in place without moving forward
	# Stay in place and do something

# When do I use a For loop?
	# When I want to do something for each element as I move forward
	# Move forward and do something





















