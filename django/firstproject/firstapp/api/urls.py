from django.urls import path
from firstapp.api import views

# Shortcut to call the name of the app
app_name = 'firstapp_api'


urlpatterns = [
	path('book_list_view', views.book_list_view, name='book_list_view'),
	path('BookListViews', views.BookListView.as_view(), name='BookListView'),


	# Detail
	path('book_detail_view/<int:pk>', views.book_detail_view, name='book_detail_view'),
	path('BookDetailView/<int:pk>', views.BookDetailView.as_view(), name='BookDetailView'),

	# Create
	path('book_create_view', views.book_create_view, name='book_create_view'),
	path('BookCreateView', views.BookCreateView.as_view(), name='BookCreateView'),

	# Update
	path('book_update_view/<int:pk>', views.book_update_view, name='book_update_view'),
	path('BookUpdateView/<int:pk>', views.BookUpdateView.as_view(), name='BookUpdateView'),


	# Delete
	path('book_delete_view/<int:pk>', views.book_delete_view, name='book_delete_view'),
	path('BookDeleteView/<int:pk>', views.BookDeleteView.as_view(), name='BookDeleteView'),

]