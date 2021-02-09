from django.urls import path
from firstapp import views

# Shortcut to call the name of the app
app_name = 'firstapp'


urlpatterns = [
	path('', views.firstapp_index, name='firstapp_index'),
	path('firstapp_list_view', views.firstapp_list_view, name='firstapp_list_view'),
	path('BookListView', views.BookListView.as_view(), name='book_list_view'),

]
