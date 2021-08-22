from rest_framework import routers
from leads.api.views import LeadViewSet

router = routers.SimpleRouter()
router.register(r'leads/api', LeadViewSet, basename='leads')
urlpatterns = router.urls