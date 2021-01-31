'''

### String Indexing

Print the Following

# d

# o

# djan

# jan

# go

# ognajd

'''
# my_string = '0d 1j 2a 3n 4g 5o'

my_string = 'django'

# d
# print(my_string[0])

# # 0
# # print(my_string[5])
# print(my_string[-1])

# # djan
# print(my_string[0:4])

# # jan
# print(my_string[1:4])

# # go
# print(my_string[4:])



'''

### Nested Lists ###

Re-assign "change_me" to be "changed"

'''
my_list = [3,'hello',[1,4,'change_me']]	

# print(my_list[2][2])
# my_list[2][2] = 'changed'
# print(my_list)


'''

### Dictionaries ###

Print print_me from the dictionary

'''
# d1 = {'k1':'print_me'}
# print(d1['k1'])


# d2 = {'k1':{'k2':'print_me'}}
# print(d2['k1']['k2'])

# d3 = {'k1':[{'nested_key':['37',['print_me']]}]}
# print(d3['k1'][0]['nested_key'][1][0])
# print(d3['k1'][0]['nested_key'][1][0])


'''

### Tuples ###

Add 5 6 and 7 to the Tuple

'''
my_tuple = (1, 2, 3)

# print(dir(my_tuple))

# tuple unpacking

# val1, val2, val3 = my_tuple
# print(val1, val2, val3)

# # Reassignment of the tuple values
# my_tuple = (val1, val2, val3, 5, 6, 7)
# print(my_tuple)
# print(type(my_tuple))


'''

### Print Formatting ###

Print 'Welcome to the DjanoPy BootCamp John Doe'

Side note - we have not covered this yet so try to Google it


'''
first_name = 'John'
last_name='Doe'

# This is the older way
print('Welcome to the Django Bootcamp', first_name, last_name)

# This is the new way to print in python
print(f'Welcome to the Django Bootcamp {first_name} {last_name}')

# This is not the same - this does not work for what we want
print('Welcome to the Django Bootcamp {first_name} {last_name}')

print(f'{{}}')














