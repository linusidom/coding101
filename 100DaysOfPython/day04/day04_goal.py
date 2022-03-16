print('Welcome to our Foot Massage Shop')

print('''\nFoot Massage prices are
฿100 / hr for children 13 and under
฿200 / hr for anyone between 13 and 55, and
Free for Seniors 55 and over.
If you would like to balm as well, it is an additional ฿50 / hr.\n''')

massage = int(input("Would you like 1 hr or 2 hr massage? '1' or '2' "))

price = 0
base_price = 200
balm_price = 50

# 1 Hour massage
if massage == 1:
    age = int(input('How old are you? '))
    balm = input("Would you like to have balm as well? 'yes' or 'no' ")
    if age <= 13:
        price = base_price / 2
    elif age > 13 and age < 55:
        price = base_price
    if balm == 'yes':
        price += balm_price
    
    print(f'The total amount due is ฿{price}.  Thank you')

# 2 Hour massage
elif massage == 2:
    
    age = int(input('How old are you? '))
    balm = input("Would you like to have balm as well? 'yes' or 'no' ")
    
    if age <= 13:
        price = base_price
    
    elif age > 13 and age < 55:
        price = base_price * 2
    
    if balm == 'yes':
        price += balm_price * 2
    print(f'The total amount due is ฿{price}.  Thank you')
else:
    print("I'm sorry but that is an invalid selection")
