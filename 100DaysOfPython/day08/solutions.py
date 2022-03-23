"""
# Print the following pattern
# [1]
# [1, 2]
# [1, 2, 3]
# [1, 2, 3, 4]
# [1, 2, 3, 4, 5]
# [1, 2, 3, 4]
# [1, 2, 3]
# [1, 2]
# [1]

# Range 
"""
# l_mountain = []
# for i in range(1,6):
#     l_mountain.append(i)
#     print(l_mountain)

# for i in range(len(l_mountain) - 1, 0, -1):
#     l_mountain.pop()
#     print(l_mountain)

"""
# Multiplication table of a given number up to 20

# Range
"""
# base_number = 2 # Mutliplication table of 2
# for i in range(1,21):
#     print(f'{base_number} * {i} = {base_number * i}')


"""
# Create a random list of ten numbers between 0 and 100
#  and then show only the numbers that are above 50
"""
# import random
# l_random = []
# for i in range(10):
#     l_random.append(random.randint(0,100))
# # print(len(l_random))
# print(l_random)
# for i in l_random:
#     if i > 50:
#         print(i)

"""
# Print the list in reverse order
"""
# l_reverse_me = [1,2,3,4,5, 'reversed?', 'I', 'Am']
# print(l_reverse_me[::-1])

# l_temp = []

# for i in range(len(l_reverse_me) - 1, -1, -1):
#     l_temp.append(l_reverse_me[i])
# print(l_temp)

"""
# Find the Max, Min, Average, Sum
"""

list1 = [64, 78, 23, 16, 98, 74, 42, 9, 72, 52, 77, 48, 42, 31, 94, 73, 18, 32, 18, 12]

# max_value = list1[0]
# for i in list1:
#     if max_value < i:
#         max_value = i
# print(max_value)

# # Built in function
# print(max(list1))

# min_value = list1[0]
# for i in list1:
#     if min_value > i:
#         min_value = i
# print(min_value)
# print(min(list1))


# Avg = sum / number of elements
# total = 0
# for i in list1:
#     total += i
# print(total) # We solved the sum while calculating the average
# print(sum(list1))

# print(round(total / len(list1), 1))


# Break me out!!  if a number in list1 is equal to 48 break out of the for loop
# for i in list1:
#     if i == 48:
#         print('Found it!')
#         break # is a way to break out of a loop (while or for)
#     print(i)

"""
Password Generator

"""

print('Welcome the Password Generator')

# Import specific sections of a library
import random
from string import ascii_letters

number_list = '0123456789'
special_characters = '!@#$%^&*()'


numbers = int(input('How many numbers would you like to use in your password: '))
letters = int(input('How many letters would you like to use in your password: '))
sp_char = int(input('How many special characters would you like to use in your password: '))

password = []

# Numbers for loop
for i in range(numbers):
    password.append(random.choice(number_list))

print(password)

# Letters for loop
for i in range(letters):
    password.append(random.choice(ascii_letters))
print(password)

# Special characters for loop
for i in range(sp_char):
    password.append(random.choice(special_characters))

print(password)


# If we want to rearrange the elements
# Use shuffle
# Shuffle will change the original list
random.shuffle(password)

# Join 
print(''.join(password))




















