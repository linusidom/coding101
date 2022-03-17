# Data Types


# Division returns an automatic float
print(type(10 / 2))

# Floor Division returns an automatic int
print(type(10 // 2))

# There are 4 parts to an IF block
# The word 'if' (lowercase)
# The condition to check true or false
# Colon (:) to indicate the end of the if statement
# Executable code

# If this is true, then execute
a = 5
b = 6

# if a == b:
#     print('statement must be indented under the if statement')
#     print('Execute Statement, passed the test')
# # If it's not true, then execute
# # If the if statement is true, the else statement will NOT execute
# else:
#     print('Execute Statement, failed the test')

# If statements use comparison operators  in the check
# Equal ==
# Not Equal !=
# Less Than <
# Greater Than >
# Less Than or Equal to <=
# Greater than or equal to >=


# age = 100

# # If we use an if statement, elif and else are optional
# # We cannot use an elif or else without an 'if' statement

# if age < 18:
#     print('Sorry but you are too young')



# # Elif is optional
# elif age >= 18 and age <= 55:
#     print('Can Enter')

# # Elif is optional
# elif age > 55 and age <= 95:
#     print('Can Enter because you are younger than 96')

# # Else is optional
# else:
#     print('Sorry but you are too old')


age = 18
ticket = 'Denied'
# If we are going to use a variable inside the if block
# It's very good practice to declare it outside

if age > 18:
    ticket = 'Allowed'

print(ticket)
print('Age: ', age)