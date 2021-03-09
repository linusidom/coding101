# Check if the slug value exists already...

from django.utils.text import slugify
import random
import string



def random_string_generator(chars=10, letters=string.ascii_lowercase + string.ascii_uppercase + string.digits):
	return ( ''.join(random.choice(letters) for i in range(10)))


def unique_slug(instance, new_slug=None):

	if new_slug:
		slug = new_slug
	else:
		slug = slugify(instance.title)

	# print(slug)


	Post = instance.__class__
	# print(Post)
	query = Post.objects.filter(slug=slug).exists()
	# print(query)
	if query:
		slug = random_string_generator(chars=10)

		return unique_slug(instance, new_slug=slug)
	return slug
