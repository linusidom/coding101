from leads.models import Lead
from rest_framework import viewsets, permissions
from leads.api.serializer import LeadSerializer
from rest_framework import status
from rest_framework.response import Response
import json

class LeadViewSet(viewsets.ModelViewSet):
    # queryset = Lead.objects.all()
    permission_class = [permissions.IsAuthenticated]
    serializer_class = LeadSerializer
    authentication_classes = []

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return self.request.user.owner.all()
        return None
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


    def destroy(self, request, *args, **kwargs):
        serializer = self.get_serializer(self.get_object())
        super().destroy(request, *args, **kwargs)
        return Response(serializer.data, status=status.HTTP_200_OK)
