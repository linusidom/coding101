"""
Immutability

Cannot alter, just re-assing

strings and numbers are immutable
"""

string = 'This is a string'
# print(string[0:5])
# string[0] = 'Changed'
# string = "This is the only way to change a string, this is known as re-assignment"
# print(string)

# number = 510
# This is not possible with numbers
# number[0] = 4



"""

Mutability

Lists are changeable

We can alter the contents of a list and not worry about re-assignment

"""

# What is a list
# List is a way to store data or other variables
# list1 = string.split()
# print('Length of Original List: ', len(list1))
# print(type(list1))
# print(type(string))
# list1[0] = 'Changed'
# print(list1)
# list1[3] = 'Test'
# print('Lenght of new List: ', len(list1))
# print(list1)

# list1[0] = 5
# print(list1)

# print(type(list1[0]))
# print(type(list1[1]))

# list1[2] = ['This', 'is', 'a', 'new', 'list']
# list1[2] = 'This is a new list'.split()
# print(list1)

# If we ever want to loop through a list
# think of len with lists - should use the len function as opposed to a hardcoded number
# count = 0

# while count < len(list1):
#     print(f'{list1[count]}')
#     count += 1

'''

This is really annoying
This is really hard and confusing

Copying one list to another

'''
# list1 = string.split()

# # This is not a real copy
# # list2 = list1

# # This is the way to truly copy one list to another
# list2 = list1[:]

# list2[0] = 'Changed'

# print('L1 ', list1)
# print('L2 ', list2)


"""
Common funtions or methods with lists

append - add an item to the list
 - Will add to the end of the list

pop - Remove an item from the list
 - By default will remove from the end
 - Can specify specific position

"""

list1 = string.split()
print(list1)

# Add an element / another item to the list
# Append

# this will add as a regular list item
# list1.append('Another part added')

# This will add as a nested element
# list1.append(['Another', 'part', 'added'])

# Add it as individual elements - use extend
# list1.extend(['Another', 'part', 'added'])


# Remove elements - pop
# This will remove from the end
list1.pop()

# this will remove the 1st element
list1.pop(1)

print(list1)




