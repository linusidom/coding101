# from file import function
from functions_file1 import even_numbers



# There is no funtion in this file
# We call the function from another file
# We can keep re-using the same function over and over

print('From Functions File 2')


another_list = [12,34,346,12,245,346,112,5623,37]



print(even_numbers(another_list))