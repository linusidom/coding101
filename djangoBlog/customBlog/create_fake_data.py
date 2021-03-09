import os
import django
import random
    
# Project name settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'customBlog.settings'

# Django setup will import all the necessary config from the setting file
django.setup()

from posts.models import Post
from comments.models import Comment
from django.contrib.auth import get_user_model

User = get_user_model()


# posts = Post.objects.all()
# print(posts)

# I want to create 10 users
# 'user1@user.com'
# 'user2@user.com'
# fake_users = [f'user{number}' for number in range(10)]
# print(fake_users)

# for user in fake_users:
# 	user_in_db = User.objects.create_user(username=user, email=user, password='asdfasdf')
# 	print(user_in_db)


users = User.objects.all()


# I want to create a random number of Posts by each user

# Method to create fake text data

def dummy_text(num):

	dummy_text = 'Officia mollit aute magna voluptate proident aute ex in cillum commodo ad nostrud ullamco eu amet qui ex.'.split(' ')

	# print(dummy_text)

	result = [random.choice(dummy_text) for i in range(num)]
	return ' '.join(result)

# print(dummy_text(10))

# for user in users:

# 	# Create Post
# 	number_of_posts = random.randint(3,10)
# 	for i in range(number_of_posts):

# 		title = dummy_text(random.randint(3,5))
# 		message = dummy_text(random.randint(30,60))

# 		Post.objects.create(
# 			user = user,
# 			title=title,
# 			message=message)




# I want to create a random number of Comments for each post by each user

posts = Post.objects.all()


for post in posts:
	number_of_comments = random.randint(10,20)
	for i in range(number_of_comments):

		user = random.choice(users)
		message = dummy_text(random.randint(5,15))

		Comment.objects.create(
			user = user,
			message = message,
			post = post,
			approval_status=random.choice([False, True])
			)





























