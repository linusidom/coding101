from django.shortcuts import render
from firstapp.models import Book

from django.views.generic.list import ListView
from django.views.generic.detail import DetailView

# Create your views here.
def firstapp_index(request):
	return render(request, 'firstapp/firstapp_index.html')	


'''
List View

Function Based vs Class Based

'''
# Function Based View
def firstapp_list_view(request):
	books = Book.objects.all()
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
	book = Book.objects.get(pk=pk)

	context = {
		'book':book
	}

	return render(request, 'firstapp/book_detail_view.html', context)


# Class Based View
class BookDetailView(DetailView):
	model = Book

























