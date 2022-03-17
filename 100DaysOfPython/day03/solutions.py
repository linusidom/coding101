# age = int(input('Enter your age: '))

# Check the data type of the age
# print(type(age))

# Convert the 'age' to a number
# age = int(age)
# print(type(age))

# Double the age
# print(age * 2)


# # Divide the age by 2
# # Divide returns a float data type
# print(age / 2)


# # What happens if you try floor division by 2?
# # floor division returns an int data type
# print(age // 2)

# # What happens if you raise (exponent) the age to itself?
# print(age ** age)

# # What is the remainder of the age divided by 3?
# print(age % 3)


# Fix the following to get the original age
# original_age = age * (age - age) / age + age
# print(original_age)
# # If block
# if original_age == age:
#     print('Woohoo!!!')
# else:
#     print('Hmmm...try again')


# Tip Calculator
print('Tip Calculator\n')

total_bill = int(input('What is the total amount of the bill? '))
people = int(input('How many people are splitting this bill? '))
tip = int(input('What percentage tip would you like to leave? '))

# tip is in a whole number, but normally tips are percentages
# Convert the whole number to a percentage
# tip_percent = tip / 100

# Add the tip to the total bill
# total_w_tip = total_bill * (tip_percent + 1)
# per_person_amount = total_w_tip / people

per_person_amount = (total_bill * (1+ tip / 100))/ people


print(f'\nThe total amount each person should leave is ${per_person_amount}')