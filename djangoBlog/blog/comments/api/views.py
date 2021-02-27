from django.http import JsonResponse
from comments.api.models import CommentSerializer
from comments.models import Comment

# Get current approval Status
def approval_status(request, slug):
	
	# Get the current comment based on slug
	comment = Comment.objects.get(slug=slug)

	# Serialize the comment
	serializer = CommentSerializer(comment)

	# Return the data in Json Format
	return JsonResponse(serializer.data, safe=False)




# Update Approval (true to false or false to true)
def update_approval_status(request, slug):
	pass