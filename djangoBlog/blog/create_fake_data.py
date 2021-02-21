import random
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','blog.settings')

import django
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

from posts.models import Post
from comments.models import Comment
from profiles.models import Profile

# bloggers
# bloggers = [f'b{_}' for _ in range(9)]
# emails = [f'{user}@{user}.com' for user in bloggers]
# zipped = list(zip(bloggers, emails))

# for user,email in zipped:
# 	User.objects.create_user(username=user, email=email, password='adminadmin')

dummy_text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis repellendus ipsa sit delectus, repudiandae illum distinctio mollitia, cupiditate nostrum fugit, totam cumque rem aspernatur facere. Sequi ullam aut assumenda ducimus, accusamus deserunt nobis alias, in exercitationem eligendi, aperiam eum ipsum quae rerum, id enim! Itaque voluptatem placeat assumenda qui, sint enim minima ad, aliquam officiis eum minus velit magnam pariatur animi omnis. Alias molestias magnam illo deleniti, odio nostrum qui fuga accusantium aperiam quos sequi. Sed nostrum beatae sapiente perferendis adipisci natus quod. Nisi, beatae in! Autem illum distinctio minima enim incidunt aspernatur, dolorem aperiam odit maiores! Ipsam, perspiciatis, rerum.'.split()

def rand_select(num):
	return [random.choice(dummy_text) for i in range(num)]

blogger_list = User.objects.filter(username__icontains='b')
# Create a random number of posts per blogger

# for blogger in blogger_list:
# 	post_number = random.randint(3,5)
# 	print(blogger)
# 	for i in range(post_number):
# 		user = blogger
# 		title = ' '.join(rand_select(random.randint(3,7))).title()
# 		message = ' '.join(rand_select(random.randint(5,15))).title()

# 		posting = {
# 			'user': user,
# 			'title': title,
# 			'message':message,
# 		}

# 		post = Post.objects.create(**posting)


all_posts = Post.objects.all()

for post in all_posts:
	comment_number = random.randint(5,10)

	for i in range(comment_number):
		user = random.choice(blogger_list)
		post = post
		message = ' '.join(rand_select(random.randint(5,15))).title()

		comment_message = {
			'user': user,
			'post':post,
			'message':message,
		}

		Comment.objects.create(**comment_message)










