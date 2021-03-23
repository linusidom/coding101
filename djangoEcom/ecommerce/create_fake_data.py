import os
import django
import random
    
# Project name settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'ecommerce.settings'

# Django setup will import all the necessary config from the setting file
django.setup()

from django.contrib.auth import get_user_model
User = get_user_model()

from courses.models import Course

# Create 10 users or developer
# developers = [{
# 	'username': f'dev{num}',
# 	'first_name': f'dev{num}',
# 	'last_name': f'dev{num}',
# 	'email': f'dev{num}@dev.com',

# } for num in range(0,10)]


# print(developers)

# Create the Users
# for developer in developers:
# 	User.objects.create_user(password='asdfasdf', **developer)



# Create courses by these 10 developers

# 2-4 courses per developer



def dummy_text(num):
	text = 'Qui in esse tempor eiusmod ea culpa consectetur cupidatat proident enim sit eu ex officia labore culpa deserunt do veniam ut ut ea proident quis mollit nulla nisi enim ad cupidatat ad id sit proident enim minim labore minim occaecat occaecat quis dolore ad dolor do commodo aliqua quis duis do dolore in laboris sit culpa eiusmod laboris nisi aliqua reprehenderit sunt fugiat nulla velit pariatur commodo nostrud consectetur velit voluptate ut aute aute nulla eu in aute ad labore non enim ea qui dolore ullamco labore qui laboris quis ut elit pariatur eu qui esse quis minim incididunt veniam commodo et irure occaecat qui et incididunt anim non aute velit laborum proident nulla officia laboris nisi elit esse nisi veniam cupidatat irure tempor nostrud sunt consequat nulla id veniam sit nostrud sunt nisi reprehenderit dolore nostrud elit aute do magna non irure id ut nisi excepteur do eu ex sint enim nulla id nisi dolore dolor reprehenderit occaecat nostrud consequat qui aute in officia consectetur magna consectetur veniam amet est adipisicing cupidatat fugiat id adipisicing quis reprehenderit in aute qui officia aliqua cillum laboris elit ut irure reprehenderit dolor sunt eu commodo sint anim ad minim consequat occaecat in aliqua cillum culpa tempor proident aliqua ex commodo deserunt velit cillum id ea quis dolor cupidatat do dolor minim non occaecat ut dolor minim nulla quis aliquip ut enim voluptate pariatur adipisicing adipisicing tempor ad ut non tempor voluptate magna irure proident quis aliquip amet elit officia tempor ut ut pariatur non ut aliqua qui tempor velit sit adipisicing eiusmod tempor.'.split(' ')
	result = [random.choice(text) for i in range(num)]
	return ' '.join(result).capitalize()
# print(dummy_text(5))

CATEGORY = (
	('itd', 'IT Development'),
	('wd', 'Web Design'),
	('iandd', 'Illustration and Drawing'),
	('sm', 'Social Media'),
	('ps', 'PhotoShop'),
	('crypto', 'CryptoCurrencies'),
	)


users = User.objects.filter(username__icontains='dev')

# print(users)
# print(User.objects.all())
for user in users:

	# Create 2-4 courses
	course_entries = random.randint(2,4)
	for course in range(course_entries):
		# user = user
		name = dummy_text(3)
		short_description = dummy_text(7)
		long_description = dummy_text(40)
		certification = dummy_text(40)
		price = random.randint(12, 20)
		category = random.choice(CATEGORY)[0]
		number_of_students = random.randint(30,150)
		course_rating = random.randint(1.0,5.0)

		course_object, created = Course.objects.get_or_create(
			user = user,
			name = name,
			short_description = short_description,
			long_description = long_description,
			certification = certification,
			price = price,
			category = category,
			number_of_students = number_of_students,
			course_rating = course_rating,

			)

		print(course_object, created)











# CATEGORY = (
# 	('itd', 'IT Development'),
# 	('wd', 'Web Design'),
# 	('iandd', 'Illustration and Drawing'),
# 	('sm', 'Social Media'),
# 	('ps', 'PhotoShop'),
# 	('crypto', 'CryptoCurrencies'),
# 	)

# class Course(models.Model):
# 	user = models.ForeignKey(User, on_delete=models.CASCADE)
# 	name = models.CharField(max_length=100)
# 	short_description = models.CharField(max_length=200)
# 	long_description = models.TextField()
# 	certification = models.TextField()

# 	price = models.PositiveIntegerField()
# 	category = models.CharField(max_length=100, choices=CATEGORY)

# 	# TODO in the Future
# 	number_of_students = models.PositiveIntegerField(null=True, blank=True)
# 	course_rating = models.DecimalField(decimal_places=2, max_digits=5, null=True, blank=True)

























