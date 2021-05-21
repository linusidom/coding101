from rest_framework import serializers

from products.models import Product

class ProductSerializer(serializers.ModelSerializer):
	category = serializers.CharField(source='get_category_display')

	class Meta:
		model = Product
		fields = ['id', 'name', 'category']


	def get_category(self,obj):
		return obj.get_category_display()