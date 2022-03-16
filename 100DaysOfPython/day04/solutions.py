# number = int(input('Check whether this number is even or odd: '))

# # If the number is even, then print "Even!"

# if number % 2 == 0:
#     print(f'{number} is an even number')
# else:
#     print(f'{number} is an odd number')

# else, if the number is odd, then print "Odd!"

# Pizza Challenge
# I want to order a pizza
# Sizes available are Small ('s', ฿200) , Medium ('m' ฿300) and Large ('l' ฿400)
# Toppings available are Pepperoni (+฿50)
# Add Extra cheese (+฿50)

# size = input("What size would you like to order: 's', 'm', or 'l' ")
# toppings = input("Would you like to add pepperoni? 'yes' or 'no' ")
# cheese = input("Would you like to add cheese? 'yes' or 'no' ")

# # print(f'{size}, {toppings}, {cheese}')

# price = 0
# pepperoni = 50
# ex_ch = 50

# s = 200
# m = 300
# l = 400

# if toppings == 'yes':
#     price += pepperoni
#     # price = price + 50
# if cheese == 'yes':
#     price += ex_ch


# if size == 's':
#     # price = price + 200
#     price += s

# elif size == 'm':
#     # price = price + 200
#     price += m

# elif size == 'l':
#     # price = price + 200
#     price += l

# else:
#     print('Invalid selection')

# print(f'The total amount due for your pizza is ฿{price}.  Thank you')



# Foot Massage Shop Exercise
from sys import base_prefix


print('Welcome to our Foot Massage Shop')

print('''\nFoot Massage prices are
฿100 / hr for children 13 and under
฿200 / hr for anyone between 13 and 55, and
Free for Seniors 55 and over.
If you would like to balm as well, it is an additional ฿50 / hr.\n
''')
massage = int(input("Would you like a 1 hr or 2 hr massage? '1' or '2' "))
age = int(input("How old are you? "))
balm = input("Would you like to add balm? 'yes' or 'no' ")

price = 0
base_price = 200
balm_price = 50

if balm == 'yes':
    price += (balm_price * massage)


if massage == 1:
    if age <= 13:
        price += base_price // 2
    elif age > 13 and age < 55:
        price += base_price
    else:
        price += 0

elif massage == 2:
    if age <= 13:
        price += base_price
    elif age > 13 and age < 55:
        price += base_price * 2
    else:

        price += 0
else:
    print('Invalid selection')

print(f'Your total bill is ฿{price}.  Thank you')












