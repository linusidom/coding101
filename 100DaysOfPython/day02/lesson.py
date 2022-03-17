# Strings and Variables

# print('This is a string')

# print('Anything inside of a quote or double quote is a string')

# Variable

# the purpose of coding is to get the computer to do what we want
# The aim is to do it with the least amount of typing


# Write one time, use many times :)
# variable = 'Anything inside of a quote or double quote is a string'

# print(variable)
# print(variable.upper())
# print(variable.title())
# print(variable.lower())

# Variable naming
# naming_variables = 'Variables are named using snake_case'
# snake_case = 'This means if there is more than one word, then they should be \n separated by an _ (underscore)'
# print(f'{naming_variables} {snake_case}')

# this_is_correct_but_really_bad_name_for_a_variable = 'Bad Variable name'
# print(this_is_correct_but_really_bad_name_for_a_variable)


# three_words_maximum = 'All variables should be 3 words or less, less is best, one word is ideal'
# print(three_words_maximum)

# len function
# name = 'Bob'
# print(len(name))

# Do not use this version, use the above len(name)
# print(name.__len__())

# Input function - Your first real function!!
# Very rare, only used for learning python 
# and providing some level of interactivity

ice_cream = input('What is your favorite flavor of Ice Cream? ')
print(f'You answered {ice_cream}, {ice_cream} has {len(ice_cream)} letters in it')