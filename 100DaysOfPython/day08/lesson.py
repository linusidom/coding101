"""
Review While Loop

While loop - do something forever

"""

# while True:
#     do something

# count = 0
# while count < 5:
#     print(f'This is the current count: {count}')
#     count += 1
# print('Now we are out of the while loop')

"""
For loop


For loop - do someting for a finite amount

6 Components in a for loop

1. The word 'for'
2. Temporary variable only avaiable inside the for loop (kind of)
3. The word 'in'
4. List element (range converts a number to a list element)
5. Closing colon ':'
6. Executable - indented as as other loops/conditionals

"""
# Indexing strings string[start:stop:step]

# for count in range(0, 5, 1):
#     print(f'This is the current count: {count}')
# print('Now we are out of the FOR loop')


# for each element in the range or in the list
# Incremental For loop
for i in range(5):
    # pass # this is okay as a placeholder
    print(f'This is the current count: {i}')
print('Now we are out of the FOR loop')


# Decrementing For loop 
for i in range(4, -1, -1):
    print(f'This is the current count: {i}')
print('Now we are out of the FOR loop')