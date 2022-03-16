# age = input('Enter your age: ')

# Check the data type of the age

# print(type(age))

# Convert the 'age' to a number
# print(age)

# age = int(age)

# print(age)
# print(type(age))


# Double the age
# print(age * 2) # we can do this with strings
# print(age + 20) # Subtract, Divide, or add, or modulo, or exponent, cannot

# Divide the age by 2
# print(age / 2)

# What happens if you try floor division by 2?
# print(age // 2)

# What happens if you raise (exponent) the age to itself?
# print(age ** age)

# What is the remainder of the age divided by 3?
# print(age % 3)

# Fix the following to get the original age
# print(age * (age - age) / age + age)

# print(age / 0) # Division by zero not allowed

# 400 - 1 + 20 = 419
# But we want 20

# Tip Calculator
print('Tip Calculator')
total_bill = int(input('What is the total amount of the bill? '))
people = int(input('How many people are splitting this bill? '))
tip = int(input('What percentage tip would you like to leave? '))

# tip_percentage = tip / 100
# total_amount_with_tip = (tip_percentage + 1) * total_bill
# # print(total_amount_with_tip)
# per_person_total = total_amount_with_tip / people

per_person_total = (total_bill * (1 + tip / 100)) / people

print(f'''The total amount for a 
${total_bill} bill
splitting between {people} people
with a {tip}% tip
is ${per_person_total} per person''')