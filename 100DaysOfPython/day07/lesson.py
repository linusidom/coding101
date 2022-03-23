'''
The random library

Generates random numbers or chooses a random selection

- randint
- choice

'''

# This is our first official import that we have done
# What is a library
# A set of code that does something for us that has been created that we can re-use over and over again

import random

# randint - select a random number between two other number / between a range

l1 = ['Ann', 'Bob', 'Charley', 'David', 'Earl', 'Frank', 'Gary', 'Helen', 'India', 'Julie', 'Kevin', 'Mike', 'Nancy']
# print(len(l1))
# random_var = random.randint(0,len(l1) - 1)
# print('Random Number and Name: ', random_var, l1[random_var])

# We do lose the information on the actual position of the element
choice = random.choice(l1)
# If we need to know the position of the element, we can use the index function
print('Random Number and Name: ',l1.index(choice), choice)

count = 0
while count < len(l1):
    count += 1
    print('Choice: ', random.choice(l1), 'Randint: ', l1[random.randint(0 , len(l1) - 1)])
    




