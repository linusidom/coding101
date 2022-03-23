import random

from string import ascii_letters

special_characters = '!@#$%^&*()_+='
l_numbers = '0123456789'

print('Welcome the Password Generator')
numbers = int(input('How many numbers would you like to use in your password: '))
letters = int(input('How many letters would you like to use in your password: '))
symbols = int(input('How many special characters would you like to use in your password: '))

# print(ascii_letters)

password = []

for i in range(numbers):
    password.append(random.choice(l_numbers))

for i in range(letters):
    password.append(random.choice(ascii_letters))

for i in range(symbols):
    password.append(random.choice(special_characters))

random.shuffle(password)
print(''.join(password))
