'''
Comments 

AND 

Print Statements
'''

# The # is the symbol for making comments
# Lines with the # in front will not be printed in the output

# This is the most common form of print statements
print("We can print this statement in our terminal")
print('This is using single quotes')

# Why do we use double quotes or single quotes
# print("Would you like to learn python, 'yes or 'no' ")
# print('Would you like to learn python, "yes or "no" ')

# What happens if we forget the end quote or the beginning quote
# print('This is a broken print statement')

# Multi-Line Statement
'''
This is a 
Multiline Comment
with Single quotes
Triple Single Quotes on the opening
Triple Single Quotes on the closing
'''

"""
This is a 
Multiline Comment
with Double quotes
Triple Double Quotes on the opening
Triple Double Quotes on the closing

Shortcut is: Mac CMD + d, Windows/Linux: ctrl + d

"""

# Print statement multi-line
# Not very common
# print('''This is now
# A Multiline
# Print statement
# ''')

# print('This will use the\n \
# newline and\n \
# slash operator')


a = 'This is a variable'
b = 'inside of an f-string'
c = 'print statement'

# This is one of the most common forms of printing in python
print(f'{a} {b} {c}')
print('Start ' + a + ' ' + b + ' ' + c + ' End')