import json
from django.http import JsonResponse
from products.models import Product
from products.api.models import ProductSerializer
from django.views.decorators.csrf import csrf_exempt




@csrf_exempt
def product_api_list(request):
	# print(request.body)
	categories = json.loads(request.body)
	print(categories)

	products = Product.objects.filter(category__in=categories)

	serializer = ProductSerializer(products, many=True)

	return JsonResponse(serializer.data, safe=False)