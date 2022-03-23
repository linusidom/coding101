# For loops vs while loops

"""
# While Loop
"""
# print('While Loop')
# count = 0
# while count < 5:
#     print(f'This is count number {count}')
#     count += 1

"""
# For loop
# 6 Components in a for loop
# The word 'for'
# Temporary variable only avaiable inside the for loop (kind of)
# The word 'in'
# List element (range converts a number to a list element)
# Closing colon ':'
# Executable - indented as as other loops/conditionals
"""
# print('\nFor Loop')
# for count in range(5):
#     print(f'This is count number {count}')


# for item in list1:
#     do something with item
#     or
#     do something with list[item]


# While loop - do something forever
# For loop - do someting for a finite amount

# String indexing string[start:stop:step]
# print(range(start, stop, step)) # start at 0, go until < 5

# Range is not inclusive of the end number

# for count in range(0, 11, 2):
#     print(count)

"""
Lists and for loops

The most common use case in coding

'for i in list' is the most common way to iterate through a list

"""

l1 = [10,20,30,40,50]

print('Using temp_var in range')
for temp_var in range(5):
    print(l1[temp_var])

# OR we can use a for (foreach)

# For lists specifically
# For with List instead of Range
print('\nUsing i in l1')
for i in l1:
    print(i)


