from django.http import JsonResponse
from comments.api.models import CommentSerializer
from comments.models import Comment
from posts.models import Post
from django.contrib.auth.decorators import login_required


@login_required
def approval_update(request, slug):
	comment = Comment.objects.get(slug=slug)

	# print('Before ',comment.approved)
	
	if comment.approved == False:
		comment.approved = True
	else:	
		comment.approved = False
	
	# print('After ', comment.approved)
	comment.save()

	serializer = CommentSerializer(comment)

	return JsonResponse(serializer.data, safe=False)


def approval_check(request, slug):
	comment = Comment.objects.get(slug=slug)
	serializer = CommentSerializer(comment)
	# print(serializer.data)
	return JsonResponse(serializer.data, safe=False)