from django.http import JsonResponse
from comments.api.models import CommentSerializer
from comments.models import Comment
from posts.models import Post

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

# Get current approval Status
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def approval_status(request, slug):
	
	# Get the current comment based on slug
	comment = Comment.objects.get(slug=slug)
	post = Post.objects.get(id=comment.post.id)

	if post.user == request.user:

	# Serialize the comment
		serializer = CommentSerializer(comment)

	# Return the data in Json Format
		return JsonResponse(serializer.data, safe=False)
	else:
		return JsonResponse('{"message":"Denied"}', safe=False)



# Update Approval (true to false or false to true)
@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_approval_status(request, slug):
	# Get the comment
	comment = Comment.objects.get(slug=slug)
	post = Post.objects.get(id=comment.post.id)

	if post.user == request.user:
	# Check the apprval status
	# if it's true, change to false
		if comment.approval_status == True:
			comment.approval_status = False


		# if it's false change to true
		elif comment.approval_status == False:
			comment.approval_status = True

		# Save the Comment
		comment.save()

		# Serialize the comment

		serializer = CommentSerializer(comment)

		# Return the data in Json Format
		return JsonResponse(serializer.data, safe=False)
	else:
		return JsonResponse("{'message':'Denied'}", safe=False)





























