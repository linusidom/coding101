import os
import django
import random
import string

# Project name settings
os.environ['DJANGO_SETTINGS_MODULE'] = 'leadmanager.settings'

# Django setup will import all the necessary config from the setting file
django.setup()


from leads.models import Lead



def dummy_text(num):
	result = [random.choice(string.ascii_lowercase) for i in range(num)]
	return ''.join(result)
print(dummy_text(5))
print(dummy_text(5) + '@aol.com')

for _ in range(20):
	name = dummy_text(5)
	email = dummy_text(5) + '@aol.com'
	message = dummy_text(5)

	lead_obj = Lead.objects.get_or_create(
		name=name,
		email=email,
		message=message
	)
	print(lead_obj)




