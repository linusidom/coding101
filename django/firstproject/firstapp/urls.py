from django.urls import path
from firstapp import views

# Shortcut to call the name of the app
app_name = 'firstapp'


urlpatterns = [
	path('', views.firstapp_index, name='firstapp_index'),
	path('book_list_view', views.firstapp_list_view, name='book_list_view'),
	path('BookListView', views.BookListView.as_view(), name='BookListView'),


	# Book Detail
	path('book_detail_view/<int:pk>', views.book_detail_view, name='book_detail_view'),
	# Class Based detail View
	path('BookDetailView/<int:pk>', views.BookDetailView.as_view(), name='BookDetailView'),


	# Book Form Test
	# path('book_form_test', views.book_form_test, name='book_form_test'),

	# Book Create
	path('book_create_view', views.book_create_view, name='book_create_view'),
	path('BookCreateView', views.BookCreateView.as_view(), name='BookCreateView'),	

	# Book Update
	path('book_update_view/<int:pk>', views.book_update_view, name='book_update_view'),
	path('BookUpdateView/<int:pk>', views.BookUpdateView.as_view(), name='BookUpdateView'),	


	# Book Delete
	path('book_delete_view/<int:pk>', views.book_delete_view, name='book_delete_view'),
	path('BookDeleteView/<int:pk>', views.BookDeleteView.as_view(), name='BookDeleteView'),	


]














