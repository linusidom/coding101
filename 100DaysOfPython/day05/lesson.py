# - Print statements
# - Variables with Strings and Integers
# - If / Else / elif

# print('This is a print statement')
# print(f'This is a more flexible print statement')

# variable = 'This is a string'
# number = 10

# print(variable)
# print(number)
# print(f'{number}')

# if variable == number:
#     print('A string and integer will never be equal')
#     print('Because they have different data types')
# elif variable != number:
#     print('This will print because strings and integers are not equal')
# else:
#     print('In this case , the else will never print')

# While Loops
# We use loops to keep a program running
# We can stop while loops from running as well


# This is the most basic while loop, but
# DO NOT TYPE THIS
# This will never end!!

# while True:
#     print('This is a while loop')


# What we really want to do is combine if statement with while loops

# # variable
# running = True

# while running:
#     print('How many times will I see this line? ')
#     print(f'{running}')
#     if running == True:
#         running = False
#         # After this last statement
#         # The program returns back to the while loop at the top
#         # The variable running gets evaluated again...
#         # This time it will be False

# While loop for 5 counts

# 5 Basic components in a while loop
# The word 'while'
# Condition statement
# Executable Code
# Some way to BREAK the while condition (if desired)
#  - declare a starting variable outside
#  - change the condition inside the while loop


count = 0
while count < 5:
    print(f'The current count is {count}')
    # count = count + 1
    count += 1