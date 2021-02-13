from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from firstapp.api.models import BookSerializer
from firstapp.models import Book

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

class BookListView(ListAPIView):
	queryset = Book.objects.all()
	serializer_class = BookSerializer
