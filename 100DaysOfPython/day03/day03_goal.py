print('Tip Calculator')
total_bill = int(input('What is the total amount of the bill? '))
people = int(input('How many people are splitting this bill? '))
tip = int(input('What percentage tip would you like to leave? '))

tip_amount_converted = tip / 100
total_bill_with_tip = total_bill * ( 1 + tip_amount_converted)
per_person_amount = total_bill_with_tip / people


# Short-hand - Most common
# per_person_amount = (total_bill * (1 + tip / 100)) / people


print(f'The total amount each person should leave is ${per_person_amount}')