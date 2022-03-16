# If 

a = 4
b = 5

# # This is an 'if' block
# # 4 components
# # the word 'if'
# # Comparison statement
# # Closing 'colon' ':'
# # Executable (indicated by indentation)
# if a == b:
#     print("The 'if' block executed")

# # Elif...
# # Same 4 rules as the 'if' block
# # But we can have as many elif blocks as we want
# elif a != b:
#     print('a is not equal to b')
# elif a < b:
#     print('a is less than b')
# elif a > b:
#     print('a is greater than b')

# # else
# # 3 components required
# # The word 'else'
# # Closing 'colon' ':'
# # Executable (indicated by indentation)
# else:
#     print('This is inside an else block')
#     print('Else block is a catch-all for any scenario that does not pass the if statement')
#     print("Else block will only execute if the 'if' block fails")


# all variables should be declared outside in the main area
c = 0

if a == b:
    # We should not create variables inside 'if' blocks
    c = a

if c == a:
    print(f'c is now equal to a: {c}')
else:
    print(f'c is equal to {c}')






