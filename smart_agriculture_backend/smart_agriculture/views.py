from rest_framework.viewsets import ModelViewSet
from smart_agriculture.models import (Crop, CropCategory, Division, Fertilizer,
                                      Post, Profile, Zilla,
                                      ZillaCropFertilizer)
from smart_agriculture.serializers import (CropCategorySerializer,
                                           CropSerializer, DivisionSerializer,
                                           FertilizerSerializer,
                                           PostSerializer, ProfileSerializer,
                                           ZillaCropFertilizerSerializer,
                                           ZillaSerializer)


class CropViewSet(ModelViewSet):
    queryset = Crop.objects.all()
    serializer_class = CropSerializer

class CropCategoryViewSet(ModelViewSet):
    queryset = CropCategory.objects.all()
    serializer_class = CropCategorySerializer

class DivisionViewSet(ModelViewSet):
    queryset = Division.objects.all()
    serializer_class = DivisionSerializer

class FertilizerViewSet(ModelViewSet):
    queryset = Fertilizer.objects.all()
    serializer_class = FertilizerSerializer

class PostViewSet(ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ProfileViewSet(ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ZillaViewSet(ModelViewSet):
    queryset = Zilla.objects.all()
    serializer_class = ZillaSerializer

class ZillaCropFertilizerViewSet(ModelViewSet):
    queryset = ZillaCropFertilizer.objects.all()
    serializer_class = ZillaCropFertilizerSerializer
