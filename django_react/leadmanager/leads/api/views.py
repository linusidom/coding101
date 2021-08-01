from leads.models import Lead
from rest_framework import viewsets, permissions
from leads.api.serializer import LeadSerializer
from rest_framework import status
from rest_framework.response import Response
import json

class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_class = [permissions.AllowAny]
    serializer_class = LeadSerializer
    authentication_classes = []

    # def destroy(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     self.perform_destroy(instance)
    #     context = json.dumps(instance)
    #     return Response(context, status=status.HTTP_200_OK)
