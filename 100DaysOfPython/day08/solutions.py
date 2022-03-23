"""
Multiplication table of a given number up to 20

"""
# number = 23
# for i in range(1,21):
#     print(f'{number} * {i} = {number * i}')





"""

Count up and Count Down

Create 2 for loops
The first for loops counts up from 0 to 10
the second for loop counts down from 10 to 0

"""
# Count up (increment)
# for i in range(11):
#     print(f'Count up: {i}')

# Count Down
# for i in range(-3, -10, -1):
#     print(f'Count down: {i}')


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

Store data in the list

"""

# l_mountain = []

# # Create 2 For loops

# # Append Loop
# count = 0
# while count < 6:
#     for i in range(1,6):
#         l_mountain.append(i)
#         print(l_mountain)

#     # Pop Loop
#     for i in range(4,-1, -1):
#         l_mountain.pop()
#         print(l_mountain)
    
#     count += 1

"""
Password Generator
"""

# Setup the lists that we want to pull data from

# import random # not preferred but acceptable
from random import choice, shuffle # this is the preferred because it's more specific


# For letters
from string import ascii_letters
numbers_list = '0123456789'
symbols_list = '!@#$%^&*()'
# letters_list = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'





print('Welcome the Password Generator\n')
numbers = int(input('How many numbers would you like to use in your password: '))
letters = int(input('How many letters would you like to use in your password: '))
symbols = int(input('How many special characters would you like to use in your password: '))

# I'm not going to do the error checking for integers
# Because I want to concentrate on the for loops

password = []

# Numbers for loop
for i in range(numbers):
    password.append(choice(numbers_list))

for i in range(letters):
    password.append(choice(ascii_letters))

for i in range(symbols):
    password.append(choice(symbols_list))

shuffle(password)

print(''.join(password))
