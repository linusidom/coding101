# from django.forms import ModelForm
from django import forms
from firstapp.models import Book



class BookForm(forms.ModelForm):
	class Meta:
		model = Book
		fields = ['title', 'author', 'published_date', 'number_of_copies']
		widgets = {
			'title' : forms.TextInput(attrs={'class':'form-control', 'placeholder':'Enter the Title of the Book'}),
			'author' : forms.TextInput(attrs={'class':'form-control', 'placeholder':'Enter the Author of the Book'}),
			'published_date' : forms.DateInput(attrs={'class':'form-control', 'placeholder':'Enter the Date the Book was Written', 'type':'date'}),
			'number_of_copies': forms.NumberInput(attrs={'class':'form-control', 'placeholder':'Enter the Number of Copies of the Book'}),
		}
