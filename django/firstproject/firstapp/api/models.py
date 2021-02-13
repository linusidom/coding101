from rest_framework import serializers
from firstapp.models import Book

class BookSerializer(serializers.ModelSerializer):
	class Meta:
		model = Book
		fields = ['id', 'title', 'author', 'published_date', 'number_of_copies']