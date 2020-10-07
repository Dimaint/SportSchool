from rest_framework import routers
from .views import ProductsViewSet, OrdersViewSet


router = routers.DefaultRouter()
router.register(r'products', ProductsViewSet)
router.register(r'products/:id', ProductsViewSet)
router.register(r'orders', OrdersViewSet)

urlpatterns = router.urls

