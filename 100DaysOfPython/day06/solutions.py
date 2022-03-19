# Use a while loop to print through this list
l_num = [1,2,3,4,5]

# count = 0
# while count < len(l_num):
#     print(f'{l_num[count]}')
#     count += 1

# Split the string and return the length of the list
string = 'What is the length of this string after being split?'

# l_string = string.split()
# print(l_string)
# print(len(l_string))

# These should really be at the top of the file
# But for the purposes of this example I will insert it here

# import copy

# # Replace 'change me' with 'it' without changing the original list (copy the list)
# l_nested = ['Oh','Hi', ['How','Are',['You?', "This is hard"], ['But'], ['we', 'can'], ['do','change me']]]
# # l2 = l_nested[:]
# l2 = copy.deepcopy(l_nested)


# # print(l2[2][5][1])
# l2[2][5][1] = 'it'
# print(l_nested)
# print(l2)


# append the word "World" to the list and then join them with a space as a separator
l_append = ['Hello']

l_append.append('World')
# print(l_append)

# join method changes a list to a string
# print(" ".join(l_append))


# pop the 3rd element from the list (be careful with indexing here)
l_pop = ['Hello', 'How', 'Remove Me', 'are', 'you?']
l_pop.pop(2)
print(l_pop)