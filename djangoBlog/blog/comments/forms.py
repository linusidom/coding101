from django import forms
from comments.models import Comment
from django.utils.translation import ugettext_lazy as _


class CommentForm(forms.ModelForm):
	class Meta:
		model = Comment
		fields = ['message']
		widgets = {
			'message': forms.Textarea(attrs={'class':'form-control'}),
		}
		labels = {
			'message': _('Message (maximum characters allowed is 200)')
		}