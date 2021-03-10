from django import forms
from posts.models import Post

class PostForm(forms.ModelForm):
	class Meta:
		model = Post
		fields = ['title', 'message', 'body']
		widgets = {
			'title': forms.TextInput(attrs={'class':'form-control'}),
			'message': forms.Textarea(attrs={'class':'form-control'}),
		}