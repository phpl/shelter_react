from django.conf.urls import include, url
from rest_framework import routers

from .api import AnimalViewSet

router = routers.DefaultRouter()
router.register('animals', AnimalViewSet)

urlpatterns = [
    url("^", include(router.urls)),
]