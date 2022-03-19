import os
ordering = True

while ordering:

    print('''Welcome to SpotSkillz Pizza Shop\n
    Sizes available are Small ('s', ฿200) , Medium ('m' ฿300) and Large ('l' ฿400)
    Toppings available are Pepperoni (+฿50)
    Add Extra cheese (+฿50)\n
    ''')
    size = input("What size would you like to order: 's', 'm', or 'l' ")
    toppings = input("Would you like to add pepperoni? 'yes' or 'no' ")
    cheese = input("Would you like to add cheese? 'yes' or 'no' ")

    # print(f'{size}, {toppings}, {cheese}')

    price = 0
    pepperoni = 50
    ex_ch = 50

    s = 200
    m = 300
    l = 400

    if toppings == 'yes':
        price += pepperoni
        # price = price + 50
    if cheese == 'yes':
        price += ex_ch


    if size == 's':
        # price = price + 200
        price += s

    elif size == 'm':
        # price = price + 200
        price += m

    elif size == 'l':
        # price = price + 200
        price += l

    else:
        print('Invalid selection')

    print(f'\nThe total amount due for your pizza is ฿{price}.  Thank you\n')


    order_status = input("Would you like to order another Pizza? 'yes' or 'no' ")
    
    if order_status == 'no':
        ordering = False
        print('Thank you for ordering, Bye :)')
    
    if order_status == 'yes':
        os.system('clear')