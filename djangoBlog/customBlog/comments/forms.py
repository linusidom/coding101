from django import forms
from comments.models import Comment

class CommentForm(forms.ModelForm):
	class Meta:
		model = Comment
		# exclude = []
		fields = ['message']
		widgets = {
			'message': forms.Textarea(attrs={'class':'form-control', 'placeholder':'Comment Away!'})
		}