from rest_framework import routers
from .views import KidsViewSet, KidDetailViewSet


router = routers.DefaultRouter()
router.register(r'kids', KidsViewSet)
router.register(r'kidsdetail', KidDetailViewSet)

urlpatterns = router.urls

