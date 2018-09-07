from rest_framework import routers

import producer.views
import consumer.views

ROUTER = routers.DefaultRouter()
ROUTER.register('products', producer.views.ProductViewSet)
ROUTER.register('orders', consumer.views.OrderViewSet)
