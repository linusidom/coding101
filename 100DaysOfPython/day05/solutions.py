# Write a while loop that runs 5 times counting up (1 to 5) (0 to 4)

# count = 0
# while count < 5:
    
#     print(f'This is counting up from {count}')
#     count += 1


# Write a while loop that does a countdown starting from 5 to 0
# count = 5

# while count > 0:
#     print(f'This is a countdown from {count}')
#     count -= 1


# running = True
# while running:
#     ice_cream = input('What is your favorite flavor of ice cream? ')
#     print(f'{ice_cream}')

#     run_status = input("Would you like to get out of this program? 'yes' or 'no' ")
#     if run_status == 'yes':
#         running = False
#         print("Woohoo! You're Free!")
    
    

# Write a neverending loop and learn how to get out of it...

# while True:
#     print('How do I get out of this!!!  Help me!!!')
    # MAC or Windows CTRL + c



# Pizza shop modified

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

    print(f'\nThe total amount due for your pizza is ฿{price}.  Thank you')

    order_status = input("Would you like to order another Pizza? 'yes' or 'no' ")

    if order_status == 'no':
        ordering = False
        print('Thank you, have a nice day :)')
    else:
        os.system('clear')

