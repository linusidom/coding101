print('Welcome to SpotSkillz Pizza Shop')

print('''\nSizes available are Small ('s', ฿200) , Medium ('m' ฿300) and Large ('l' ฿400)
Toppings available are Pepperoni (+฿50)
Add Extra cheese (+฿50)\n''')

price = 0
pepperoni = 50
ex_ch = 50

small = 200
medium = 300
large = 400


size = input("What size would you like to order: 's', 'm', or 'l': ")
topping = input("Would you like to add pepperoni? 'yes' or 'no' ")
cheese = input("Would you like to add cheese? 'yes' or 'no' ")



if topping == 'yes':
    price += pepperoni


if cheese == 'yes':
    price += ex_ch


if size == 's':
    # price = price + 200
    price += small
elif size == 'm':
    # price = price + 200
    price += medium
elif size == 'l':
    # price = price + 200
    price += large
else:
    print('Invalid Selection')


print(f"The total amount due for your pizza is ฿{price}.  Thank you")