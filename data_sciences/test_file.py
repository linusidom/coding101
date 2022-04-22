dict1 = {'a':1, 'b':2, 'c':'3', 'd':[4,5]}
print(dict1['Not Found']) # Running it this way will crash the program
# Try to use get all the time when using dictionaries; much safer
# print(dict1.get('Not Found', 'Print this if not found'))
print('This more code that I want to execute')