from rest_framework import routers
from .views import KidsViewSet, KidDetailViewSet

# Создаем router и регистрируем наш ViewSet
router = routers.DefaultRouter()
router.register(r'kids', KidsViewSet)
router.register(r'kidsdetail', KidDetailViewSet)
# URLs настраиваются автоматически роутером
urlpatterns = router.urls
