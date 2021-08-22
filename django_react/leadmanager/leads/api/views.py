from rest_framework import viewsets, permissions, status
from leads.api.serializer import LeadSerializer
from leads.models import Lead
from rest_framework.response import Response

class LeadViewSet(viewsets.ModelViewSet):
    serializer_class = LeadSerializer
    # queryset = Lead.objects.all()
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_authenticated:
            return Lead.objects.filter(owner=self.request.user)
        return None
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(({"message":"deleted"}),status=status.HTTP_200_OK)