from django.test import TestCase
from django.contrib.auth import get_user_model
from posts.models import Post
from comments.models import Comment

User = get_user_model()

# Create your tests here.

class TestPost(TestCase):

	





	# def test_post_comment_delete_newone(self):
	# 	new_post = {
	# 		'title': 'New Post',
	# 		'message': 'New Message'
	# 	}

	# 	newone = User.objects.create_user(username='newone', password='asdfasdf')
	# 	newtwo = User.objects.create_user(username='newtwo', password='asdfasdf')
	# 	# newthree = User.objects.create_user(username='newthree', password='asdfasdf')

	# 	# Newone Creates the Post
	# 	post = Post.objects.create(user=newone, **new_post)


	# 	# New Two Makes a comment
	# 	comment = Comment.objects.create(post=post, user=newtwo, message='New Comment')

	# 	# New one logs in and is able to delete the comment
	# 	self.client.login(username='newone', password='asdfasdf')
	# 	print(comment.slug)
	# 	response = self.client.get(f'/comments/delete/{comment.slug}')
	# 	print(response)
	# 	self.assertTemplateUsed(response, 'comments/comment_confirm_delete.html')


	# def test_post_comment_delete_newtwo(self):
	# 	new_post = {
	# 		'title': 'New Post',
	# 		'message': 'New Message'
	# 	}

	# 	newone = User.objects.create_user(username='newone', password='asdfasdf')
	# 	newtwo = User.objects.create_user(username='newtwo', password='asdfasdf')
	# 	# newthree = User.objects.create_user(username='newthree', password='asdfasdf')

	# 	# Newone Creates the Post
	# 	post = Post.objects.create(user=newone, **new_post)


	# 	# New Two Makes a comment
	# 	comment = Comment.objects.create(post=post, user=newtwo, message='New Comment')

	# 	# Newtwo logs in and is able to delete the comment
	# 	self.client.login(username='newtwo', password='asdfasdf')
	# 	print(comment.slug)
	# 	response = self.client.get(f'/comments/delete/{comment.slug}')
	# 	print(response)
	# 	self.assertTemplateUsed(response, 'comments/comment_confirm_delete.html')


	# def test_post_comment_delete_newthree(self):
	# 	new_post = {
	# 		'title': 'New Post',
	# 		'message': 'New Message'
	# 	}

	# 	newone = User.objects.create_user(username='newone', password='asdfasdf')
	# 	newtwo = User.objects.create_user(username='newtwo', password='asdfasdf')
	# 	newthree = User.objects.create_user(username='newthree', password='asdfasdf')

	# 	# Newone Creates the Post
	# 	post = Post.objects.create(user=newone, **new_post)


	# 	# New Two Makes a comment
	# 	comment = Comment.objects.create(post=post, user=newtwo, message='New Comment')

	# 	# Newthree logs in and is able to delete the comment
	# 	self.client.login(username='newthree', password='asdfasdf')
	# 	# print(comment.slug)
	# 	response = self.client.get(f'/comments/delete/{comment.slug}')
	# 	# print(response)
	# 	self.assertEqual(response.status_code, 302)
	# 	self.assertEqual(response.url, '/error403')



	def test_post_comment_delete_newthree_multiple_comments(self):
		new_post = {
			'title': 'New Post',
			'message': 'New Message'
		}

		newone = User.objects.create_user(username='newone', password='asdfasdf')
		newtwo = User.objects.create_user(username='newtwo', password='asdfasdf')
		newthree = User.objects.create_user(username='newthree', password='asdfasdf')

		# Newone Creates the Post
		post = Post.objects.create(user=newone, **new_post)


		# New Two Makes a comment
		comment_two = Comment.objects.create(post=post, user=newtwo, message='New Comment')
		comment_three = Comment.objects.create(post=post, user=newthree, message='New Comment')

		# Newthree logs in and is able to delete the comment
		self.client.login(username='newthree', password='asdfasdf')
		# print(comment_two.slug)
		response = self.client.get(f'/comments/delete/{comment_two.slug}')
		# print(response)
		self.assertEqual(response.status_code, 302)
		self.assertEqual(response.url, '/error403')

		response = self.client.get(f'/comments/delete/{comment_three.slug}')
		self.assertTemplateUsed(response, 'comments/comment_confirm_delete.html')












