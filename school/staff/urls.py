from rest_framework import routers
from .views import TrainerViewSet


router = routers.DefaultRouter()
router.register(r'trainers', TrainerViewSet)

urlpatterns = router.urls