# string =   'How many letters are in this string'
# # string = '01234567890123456789012345678901234'
# # Pause the video here and we'll go through the solutions together.

 
# # Solution here
# print('length of string', len(string))

# # # print the string in uppercase
# print('upper()',string.upper())


# # # Title every word in the string
# print('title()', string.title())


# # Google String indexing, getting specific letters from a string
# # Print just the word 'letters' from the string

# # all positions/counting in programming, begins with 0
# # print(string[start:stop])
# print('Indexed 0 to 35',string[0:35])

# # Reverse the entire String
# # print(string[start:stop:step])
# print('Reversed',string[::-1])

# # Split the string
# print('Split', string.split())

print('Lucky Number Generator')

first_name = input('What is your first name? ')

last_name = input('What is your last name?') 

print(f'Well, {first_name} Your lucky number is {len(first_name)}{len(last_name)}')