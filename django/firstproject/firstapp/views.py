from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy

from firstapp.models import Book
from firstapp.forms import BookForm


from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView, UpdateView, DeleteView

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























