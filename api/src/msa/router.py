from rest_framework import routers

import user.views
import producer.views
import consumer.views

ROUTER = routers.DefaultRouter()
ROUTER.register('products', producer.views.ProductViewSet)
ROUTER.register('producers', producer.views.ProducerViewSet)
ROUTER.register('orders', consumer.views.OrderViewSet)
ROUTER.register('sessions', user.views.SessionViewSet, base_name='session')
