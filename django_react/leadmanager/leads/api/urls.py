from django.urls.resolvers import URLPattern
from rest_framework import routers
from leads.api.views import LeadViewSet

router = routers.DefaultRouter()

router.register('api/leads', LeadViewSet, 'leads')

urlpatterns = router.urls