# def tuple_wrapper(tup):

def my_wrapper_function(arr):
    for item in arr:
        print(item)

tuple1 = (1,2,'3', [4,5], {'a':1, 'b':2})
tuple2 = (7,8,9)
list1 = ['string', 'number', [1,2,3]]
dict1 = {'a': 1, 'b':2, 'c': 3}

my_wrapper_function(tuple1)
my_wrapper_function(tuple2)
my_wrapper_function(list1)
my_wrapper_function(dict1)

# for item in dict1:
#     print(item)