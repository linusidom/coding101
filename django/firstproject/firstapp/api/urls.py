from django.urls import path
from firstapp.api import views

# Shortcut to call the name of the app
app_name = 'firstapp_api'


urlpatterns = [
	path('book_list_view', views.book_list_view, name='book_list_view'),
	path('BookListViews', views.BookListView.as_view(), name='BookListView'),

]