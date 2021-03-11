import os
from django.contrib.staticfiles.testing import StaticLiveServerTestCase
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import time

from posts.models import Post
from django.contrib.auth import get_user_model

User = get_user_model()


class NewVisitorTest(StaticLiveServerTestCase):

	def setUp(self):
		self.browser = webdriver.Firefox()
		staging_server = os.environ.get('STAGING_SERVER')

		self.user = User.objects.create_user(username='newuser', password='adminadmin')

		if staging_server:
			self.live_server_url = 'http://' + staging_server

	def tearDown(self):
		self.browser.quit()


	def auto_login(self):
		input_login = self.browser.find_element_by_id('id_login')
		input_login.send_keys('newuser')

		input_password = self.browser.find_element_by_id('id_password')
		input_password.send_keys('adminadmin')

		input_password.send_keys(Keys.ENTER)

	# def test_login_test(self):
	# 	self.browser.get(self.live_server_url + '/accounts/login')
	# 	time.sleep(3)
	# 	input_login = self.browser.find_element_by_id('id_login')
	# 	input_login.send_keys('newuser')

	# 	input_password = self.browser.find_element_by_id('id_password')
	# 	input_password.send_keys('adminadmin')

	# 	input_password.send_keys(Keys.ENTER)

	# 	time.sleep(3)

	# 	username = self.browser.find_element_by_id('navbar_username').text

	# 	self.assertEqual(username, 'newuser')


	def test_post_create(self):

		# Create Post URL
		self.browser.get(self.live_server_url + '/posts/create')
		time.sleep(2)

		# Enter Login credentials
		self.auto_login()

		# Wait for the page to redirect
		time.sleep(4)


		# Grab input elements and send data
		input_title = self.browser.find_element_by_id('id_title')
		input_title.send_keys('This is a Test Title')

		input_message = self.browser.find_element_by_id('id_message')
		input_message.send_keys('This is a message')

		input_title.send_keys(Keys.ENTER)

		time.sleep(3)

		# This will go to Post Detail
		current_url = self.browser.current_url

		# I want to know if the current URL is based on the Post
		# Get the slug of the Post in the database
		post = Post.objects.get(id=1)

		# Get the slug of the URL
		current_url_slug = current_url.split('/')[-1]

		self.assertEqual(post.slug, current_url_slug)












































