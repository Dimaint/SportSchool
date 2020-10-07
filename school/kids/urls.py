from django.conf.urls import url
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

from . import views
from .views import KidsViewSet, KidDetailViewSet, TicketsViewSet, KidVisitsViewSet


router = routers.DefaultRouter()
router.register(r'kids', KidsViewSet)
router.register(r'kid/<int:id>/', KidsViewSet)
router.register(r'kidsdetail', KidDetailViewSet)
router.register(r'kidvisitlogs', KidVisitsViewSet)
router.register(r'tickets', TicketsViewSet)


urlpatterns = router.urls
