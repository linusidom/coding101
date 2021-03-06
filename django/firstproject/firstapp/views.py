from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy

from firstapp.models import Book
from firstapp.forms import BookForm


from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

# from django.db import connection

# Create your views here.
def firstapp_index(request):
	return render(request, 'firstapp/firstapp_index.html')	


'''
List View

Function Based vs Class Based

'''
# Function Based View
def firstapp_list_view(request):

	# Django's OOP (Object Oriented Programming) Command
	books = Book.objects.all()

	# Django converts this using an ORM to a SQL Command

	# Object Relational Mapper
	# Will take in OOP, convert to SQL
	# SQL Will return a table, ORM will convert to a QuerySet
	# print('\n', books.query, '\n')
	# print(books)

	# Detail View
	# book_detail = Book.objects.filter(pk=13)
	# book_detail = Book.objects.filter(title__contains='Brave')
	# print('\n', book_detail.query, '\n')



	# Create
	# new_book = {
	# 	'title': 'How to Win Friends and Influence People',
	# 	'author': 'Dale Carnegie',
	# 	'published_date': '2020-02-02',
	# 	'number_of_copies': 5
	# }

	# Book.objects.create(**new_book)
	# Update

	# Book.objects.filter(pk=49).update(number_of_copies=500)



	# Delete
	# Book.objects.filter(pk=49).delete()






	# print(connection.queries)

	# print(books)
	# for book in books:
	# 	# print(book)
	# 	print(book.title)

	context = {
		'variable_name': books
	}
	return render(request, 'firstapp/firstapp_list_view.html', context)

# Class Based View
class BookListView(ListView):
	model = Book
	
	# We have to have a file called book_list.html inside our firstapp/templates folder
	# Otherwise we have to specify the name of the template we want to use
		# template_name = 'firstapp/firstapp_list_view.html'




'''
Detail View

Function Based vs Class Based

'''

# Function Based Detail View

def book_detail_view(request, pk):
	# I need a way to get the primary key of the book that I want to see the details of
	# book = Book.objects.get(pk=pk)
	book = get_object_or_404(Book, pk=pk)

	context = {
		'book':book
	}

	return render(request, 'firstapp/book_detail_view.html', context)


# Class Based View
class BookDetailView(DetailView):
	model = Book
	








'''
Form intro
'''

# def book_form_test(request):
# 	print('Request Method', request.method)
# 	context = {
# 		'form': BookForm
# 	}
# 	return render(request, 'firstapp/book_form_test.html', context)


'''
Create View
'''

# Function Based View
def book_create_view(request):
	if request.method == 'POST':
		form = BookForm(request.POST)
		if form.is_valid():
			# print('********* Form is Valid ********',form)
			book = form.save(commit=False)
			book.save()
			return redirect('firstapp:book_detail_view', pk=book.pk)
			# return redirect('firstapp:book_list_view')		

	else:
		form = BookForm()
		# print('Else Statement Form', request.method)
	
	context = {
		'form': form
	}
	return render(request, 'firstapp/book_create_view.html', context)


# Class Based View
class BookCreateView(CreateView):
	model = Book
	form_class = BookForm

	# The Return for this is the Models get_absolute_url method




'''
Update View

Function Based vs Class Based
'''

# Function Based Update View
def book_update_view(request, pk):
	book_obj = get_object_or_404(Book, pk=pk)
	if request.method == 'POST':
		form = BookForm(request.POST, instance=book_obj)
		if form.is_valid():
			# print('********* Form is Valid ********',form)
			book = form.save(commit=False)
			book.save()
			return redirect('firstapp:book_detail_view', pk=book.pk)
			# return redirect('firstapp:book_list_view')		

	else:
		form = BookForm(instance=book_obj)
		# print('Else Statement Form', request.method)
	
	context = {
		'form': form
	}
	return render(request, 'firstapp/book_update_view.html', context)

# Class Based View
class BookUpdateView(UpdateView):
	model = Book
	form_class = BookForm

	def get_context_data(self, **kwargs):
		# Call the base implementation first to get a context
		context = super().get_context_data(**kwargs)
		context['page_type'] = 'Update'
		# print('Context', context)
		return context



'''
Delete View

Function Based View vs Class Based View
'''

def book_delete_view(request, pk):
	book_obj = get_object_or_404(Book, pk=pk)

	# I want to return a form
	if request.method == 'POST':
		book_obj.delete()
		return redirect('firstapp:book_list_view')


	context = {
		'book':book_obj
	}
	return render(request, 'firstapp/book_delete_view.html', context)


# Class Based
class BookDeleteView(DeleteView):
	model = Book
	success_url = reverse_lazy('firstapp:book_list_view')


















