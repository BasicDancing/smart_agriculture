from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (CropCategoryViewSet, CropViewSet, DivisionViewSet, FertilizerMeasureViewSet,
                    FertilizerViewSet, PostViewSet, ProfileViewSet, UserViewSet,
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
router.register(r'fertilizermeasures', FertilizerMeasureViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
