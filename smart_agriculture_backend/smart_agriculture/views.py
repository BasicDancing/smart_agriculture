from rest_framework.viewsets import ModelViewSet
from smart_agriculture.models import (Crop, CropCategory, Division, Fertilizer,
                                      Post, Profile, Zilla,
                                      ZillaCropFertilizer)
from smart_agriculture.serializers import (CropCategorySerializer,
                                           CropSerializer, DivisionSerializer,
                                           FertilizerSerializer,
                                           PostSerializer, ProfileSerializer, UserSerilizer,
                                           ZillaCropFertilizerSerializer,
                                           ZillaSerializer)
from django.contrib.auth.models import User
from rest_framework.response import Response


class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerilizer

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

    def list(self, request, *args, **kwargs):
        zilla_value = self.request.query_params.get('zilla', None)
        crop_value = self.request.query_params.get('crop', None)

        if zilla_value is not None and crop_value is not None:
            queryset = ZillaCropFertilizer.queryset.filter(zilla=zilla_value, crop=crop_value)
            fertilizers = list(queryset.values('measure', 'fertilizer').distinct())

            return Response({
                'zilla' : zilla_value,
                'crop' : crop_value,
                'fertilizers' : fertilizers
            })
            
        return super().list(request, *args, **kwargs)

