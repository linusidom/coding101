# string = 'How many letters are in this string'

# # Solution here
# print(len(string))

# # String method do not change the original variable
# # print the string in uppercase
# print(string.upper())

# # Title every word in the string
# print(string.title())

# # Print just the word 'letters' from the string
# print(string[9:16])

# # Reverse the entire String
# print(string[::-1])

# # Split the string
# # Default delimiter 'space'
# print(string.split())


# Game

print('Lucky Number Generator')
first_name = input('What is your first name? ')

# IDE shortcut, CMD + d - press it for each instance you want to change
last_name = input('What is your last name? ')
# print(first_name, last_name)
print(f'Well, {first_name} Your lucky number is {len(first_name)}{len(last_name)}')