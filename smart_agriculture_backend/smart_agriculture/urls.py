from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (CropCategoryViewSet, CropViewSet, DivisionViewSet,
                    FertilizerViewSet, PostViewSet, ProfileViewSet,
                    ZillaCropFertilizerViewSet, ZillaViewSet)

router = DefaultRouter()

router.register(r'crops', CropViewSet)
router.register(r'cropcategories', CropCategoryViewSet)
router.register(r'divisions', DivisionViewSet)
router.register(r'fertilizers', FertilizerViewSet)
router.register(r'posts', PostViewSet)
router.register(r'profiles', ProfileViewSet)
router.register(r'zillas', ZillaViewSet)
router.register(r'zillacropfertilizers', ZillaCropFertilizerViewSet)

urlpatterns = [
    path('smart/', include(router.urls)),
]
