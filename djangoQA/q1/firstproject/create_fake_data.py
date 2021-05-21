import os
import django
import random
    
# Project name settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'firstproject.settings'

# Django setup will import all the necessary config from the setting file
django.setup()

from products.models import Product

def dummy_text(num):
	text = 'Qui in esse tempor eiusmod ea culpa consectetur cupidatat proident enim sit eu ex officia labore culpa deserunt do veniam ut ut ea proident quis mollit nulla nisi enim ad cupidatat ad id sit proident enim minim labore minim occaecat occaecat quis dolore ad dolor do commodo aliqua quis duis do dolore in laboris sit culpa eiusmod laboris nisi aliqua reprehenderit sunt fugiat nulla velit pariatur commodo nostrud consectetur velit voluptate ut aute aute nulla eu in aute ad labore non enim ea qui dolore ullamco labore qui laboris quis ut elit pariatur eu qui esse quis minim incididunt veniam commodo et irure occaecat qui et incididunt anim non aute velit laborum proident nulla officia laboris nisi elit esse nisi veniam cupidatat irure tempor nostrud sunt consequat nulla id veniam sit nostrud sunt nisi reprehenderit dolore nostrud elit aute do magna non irure id ut nisi excepteur do eu ex sint enim nulla id nisi dolore dolor reprehenderit occaecat nostrud consequat qui aute in officia consectetur magna consectetur veniam amet est adipisicing cupidatat fugiat id adipisicing quis reprehenderit in aute qui officia aliqua cillum laboris elit ut irure reprehenderit dolor sunt eu commodo sint anim ad minim consequat occaecat in aliqua cillum culpa tempor proident aliqua ex commodo deserunt velit cillum id ea quis dolor cupidatat do dolor minim non occaecat ut dolor minim nulla quis aliquip ut enim voluptate pariatur adipisicing adipisicing tempor ad ut non tempor voluptate magna irure proident quis aliquip amet elit officia tempor ut ut pariatur non ut aliqua qui tempor velit sit adipisicing eiusmod tempor.'.split(' ')
	result = [random.choice(text) for i in range(num)]
	return ' '.join(result).capitalize()

for _ in range(5):

	name = dummy_text(3)
	category = random.choice(['a','b','c'])
	Product.objects.create(name=name, category=category)