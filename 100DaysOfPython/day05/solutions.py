# Write a while loop that runs 5 times counting up

# count = 1

# while count < 6:
#     print(f'The current count is {count}')
#     count += 1


# Write a while loop that does a countdown starting from 5 to 0

# count = 5

# while count > 0:
#     print(f'The current count is {count}')
#     count -= 1


# Write a neverending loop and learn how to get out of it...


# while True:
#     print('DO NOT DO THIS')

ordering = True

while ordering:

    order_status = input("\nWould you like to order another pizza? 'yes' or 'no' ")
    if order_status == 'no':
        ordering = False
        print('Thank you for ordering and have a nice day :)')

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

    print(f'The total amount due for your pizza is ฿{price}.  Thank you')

    
    
