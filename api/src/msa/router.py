from rest_framework import routers

from producer import views

router = routers.DefaultRouter()
router.register('products', views.ProductViewSet)
