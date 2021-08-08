from rest_framework import serializers
from leads.models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead
        fields = ['id','owner','name','email','message', 'created_at']
        
