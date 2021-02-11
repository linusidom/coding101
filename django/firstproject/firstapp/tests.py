from django.test import TestCase
from firstapp.models import Book

# Create your tests here.

class SimpleTest(TestCase):
	
	book = {
			'title':'Sherlock Holmes',
			'author': 'Sir Arthur Conan Doyle',
			'published_date': '2020-10-10',
			'number_of_copies': 50
		}

	new_book = {
			'title':'James Bond',
			'author': 'Sir Arthur Conan Doyle',
			'published_date': '2020-10-10',
			'number_of_copies': 50
		}

	def test_home_page(self):    
		response = self.client.get('/')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_page(self):
		response = self.client.get('/firstapp/')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_list_view(self):
		response = self.client.get('/firstapp/book_list_view')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_list_class(self):
		response = self.client.get('/firstapp/BookListView')
		self.assertEqual(response.status_code, 200)

	# Detail
	def test_firstapp_detail_view(self):
		book_obj = Book.objects.create(**self.book)
		# print('Book Object Primary Key',book_obj.pk)
		response = self.client.get(f'/firstapp/book_detail_view/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_detail_class(self):
		book_obj = Book.objects.create(**self.book)

		response = self.client.get(f'/firstapp/BookDetailView/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)


	# Create View
	def test_firstapp_create_view(self):
		response = self.client.get('/firstapp/book_create_view')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_create_post(self):
		response = self.client.post('/firstapp/book_create_view', self.book)
		self.assertEqual(response.status_code, 302)

		# print(response)
		book_pk = response.url.split('/')[-1]
		# print('Book PK', book_pk)
		book_obj = Book.objects.get(pk = book_pk)
		self.assertEqual(book_obj.title, self.book['title'])

	def test_firstapp_create_class(self):
		response = self.client.get('/firstapp/BookCreateView')
		self.assertEqual(response.status_code, 200)	

	def test_firstapp_create_class_post(self):
		response = self.client.post('/firstapp/BookCreateView', self.book)
		self.assertEqual(response.status_code, 302)

		book_pk = response.url.split('/')[-1]
		# print('Book PK', book_pk)
		book_obj = Book.objects.get(pk = book_pk)
		self.assertEqual(book_obj.title, self.book['title'])

	# Update View
	def test_firstapp_update_view(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.get(f'/firstapp/book_update_view/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_update(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.post(f'/firstapp/book_update_view/{book_obj.pk}', self.new_book)
		self.assertEqual(response.status_code, 302)
		# print(response.url)
		book_pk = response.url.split('/')[-1]
		# print('Book PK', book_pk)
		updated_book_obj = Book.objects.get(pk = book_pk)
		# print(updated_book_obj)
		self.assertEqual(updated_book_obj.title, self.new_book['title'])


	def test_firstapp_update_class(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.get(f'/firstapp/BookUpdateView/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_update_class_post(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.post(f'/firstapp/BookUpdateView/{book_obj.pk}', self.new_book)
		self.assertEqual(response.status_code, 302)
		# print(response.url)
		book_pk = response.url.split('/')[-1]
		# print('Book PK', book_pk)
		updated_book_obj = Book.objects.get(pk = book_pk)
		# print(updated_book_obj)
		self.assertEqual(updated_book_obj.title, self.new_book['title'])


	# Delete
	def test_firstapp_delete_view(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.get(f'/firstapp/book_delete_view/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_delete(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.post(f'/firstapp/book_delete_view/{book_obj.pk}')
		# print(response.status_code)
		# print(response.url)
		self.assertEqual(response.status_code, 302)


	def test_firstapp_delete_class_view(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.get(f'/firstapp/BookDeleteView/{book_obj.pk}')
		self.assertEqual(response.status_code, 200)

	def test_firstapp_delete_class(self):
		book_obj = Book.objects.create(**self.book)
		response = self.client.post(f'/firstapp/BookDeleteView/{book_obj.pk}')
		# print(response.status_code)
		# print(response.url)
		self.assertEqual(response.status_code, 302)
	











