from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from firstapp.api.models import BookSerializer
from firstapp.models import Book


from rest_framework.parsers import JSONParser

from django.views.decorators.csrf import csrf_exempt



'''
API List View
'''

# Function Based View
def book_list_view(request):
	books = Book.objects.all()
	# books = Book.objects.get(pk=1)

	# print(books)
	# for book in books:
	# 	# print(book)
	# 	print(book.title, book.author, book.published_date)

	# many=True is expecting a list and must be used if using 'all' or 'filter' to get the books
	# If using , get, many=True can be excluded
	book_serializer = BookSerializer(books, many=True)

	# print(book_serializer.data)

	json_response = JsonResponse(book_serializer.data, safe=False)
	# print(json_response)
	# print(json_response.__dict__)	

	return JsonResponse(book_serializer.data, safe=False)

# Class Based View
class BookListView(ListAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer


'''
API Detail View
'''
# Function Based View
def book_detail_view(request, pk):
	# book = Book.objects.get(pk=pk)
	book = get_object_or_404(Book, pk=pk)
	# print(book.title, book.author, book.published_date, book.number_of_copies)
	book_serializer = BookSerializer(book)
	# print(book_serializer.data)
	return JsonResponse(book_serializer.data, safe=False)

# Class Based View
class BookDetailView(RetrieveAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer




'''
API Create View
'''

# Function Create View
@csrf_exempt
def book_create_view(request):
	data = JSONParser().parse(request)
	serializer = BookSerializer(data=data)
	if serializer.is_valid():
		serializer.save()
		return JsonResponse(serializer.data)
	return JsonResponse(serializer.errors, status=400)


# Class Based View

class BookCreateView(CreateAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer



'''
API Update View
'''
# Function Update View
@csrf_exempt
def book_update_view(request, pk):
	book = get_object_or_404(Book, pk=pk)
	data = JSONParser().parse(request)
	serializer = BookSerializer(book, data=data)
	if serializer.is_valid():
		serializer.save()
		return JsonResponse(serializer.data)
	return JsonResponse(serializer.errors, status=400)

# Class Based View

class BookUpdateView(UpdateAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer


'''
API Delete View
'''

@csrf_exempt
def book_delete_view(request,pk):
	book = get_object_or_404(Book, pk=pk)
	book.delete()
	return JsonResponse("{'message':'Deleted Successfully'}", safe=False)


# Class Based
class BookDeleteView(DestroyAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer





















