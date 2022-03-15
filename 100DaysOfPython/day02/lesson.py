# Strings and Variables

# print('This is a string')

# print('This is a string'.upper())
# print('This is a string'.lower())


# This is a variable of type String
# Python is a top down synchronous language
# Order matters

# Variable naming is done 'snake_case'
# Other languages use other naming conventions

numbers_variable = '0123456789012345'
variable = 'This is a string'
this_is_also_a_poorly_named_variable = 'Do not name your variables like this'

print(this_is_also_a_poorly_named_variable.upper())

print(variable)

# Methods that we can call on a String type variable

# print(variable.upper())
# print(variable.lower())

# Most Commonly used Method on a String is Split
# print(variable.split(' '))
# print('How do I Print the word "is" from the variable')

# String Indexing / List Indexing
# With all programming languages
# Indexing starts with 0

# variable[start:'stop before we get here']
# print(variable[start:stop before we get here:step])

# Reverse direction
# start = length of the string....?
# print(len(variable))
# print(variable[len(variable):-len(variable)-1:-1])
# Fast shortcut to print in reverse
# print(variable[::-1])


# Omit letters from being printed
print(variable[3:9])