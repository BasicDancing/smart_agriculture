from rest_framework import serializers
from django.contrib.auth.models import User
from smart_agriculture.models import (Crop, CropCategory, Division, Fertilizer,
                                      Post, Profile, Zilla,
                                      ZillaCropFertilizer)


class UserSerilizer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class PostSerializer(serializers.ModelSerializer):
    owner = UserSerilizer(read_only=True)

    class Meta:
        model = Post
        fields = '__all__'

    def create(self, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        #owner_pk = attempt_json_deserialize(owner_pk, expect_type=str)
        validated_data['owner_id'] = owner_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        validated_data['owner_id'] = owner_pk

        return super().update(instance, validated_data)

class CropCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = CropCategory
        fields = ['id', 'name']

class CropSerializer(serializers.ModelSerializer):
    crop_category = CropCategorySerializer(read_only=True)

    class Meta:
        model = Crop
        fields = '__all__'

    def create(self, validated_data):
        request = self.context['request']

        crop_category_pk = request.data.get('crop_category')
        validated_data['crop_category_id'] = crop_category_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        crop_category_pk = request.data.get('crop_category')
        validated_data['crop_category_id'] = crop_category_pk

        return super().update(instance, validated_data)

class CropCategorySerializer(serializers.ModelSerializer):
    crops = CropSerializer(many=True, read_only=True)

    class Meta:
        model = CropCategory
        fields = '__all__'

class FertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = '__all__'

class DivisionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Division
        fields = ['id', 'name']


class ZillaSerializer(serializers.ModelSerializer):
    division = DivisionSerializer(read_only=True)

    class Meta:
        model = Zilla
        fields = '__all__'

    def create(self, validated_data):
        request = self.context['request']

        division_pk = request.data.get('division')
        validated_data['division_id'] = division_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        division_pk = request.data.get('division')
        validated_data['division_id'] = division_pk

        return super().update(instance, validated_data)

class DivisionSerializer(serializers.ModelSerializer):
    zillas = ZillaSerializer(many=True, read_only=True)

    class Meta:
        model = Division
        fields = '__all__'

class ZillaCropFertilizerSerializer(serializers.ModelSerializer):
    zilla = ZillaSerializer(read_only=True)
    crop = CropSerializer(read_only=True)
    fertilizer = FertilizerSerializer(read_only=True)

    class Meta:
        model = ZillaCropFertilizer
        fields = '__all__'

    def create(self, validated_data):
        request = self.context['request']

        zilla_pk = request.data.get('zilla')
        validated_data['zilla_id'] = zilla_pk

        crop_pk = request.data.get('crop')
        validated_data['crop_id'] = crop_pk

        fertilizer_pk = request.data.get('fertilizer')
        validated_data['fertilizer_id'] = fertilizer_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        zilla_pk = request.data.get('zilla')
        validated_data['zilla_id'] = zilla_pk

        crop_pk = request.data.get('crop')
        validated_data['crop_id'] = crop_pk

        fertilizer_pk = request.data.get('fertilizer')
        validated_data['fertilizer_id'] = fertilizer_pk

        return super().update(instance, validated_data)
    
class FertilizerMeasureSerializer(serializers.ModelSerializer):
    fertilizer = FertilizerSerializer(read_only=True)

    class Meta:
        model = ZillaCropFertilizer
        fields = ['id', 'fertilizer', 'measure']

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    zilla = ZillaSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = '__all__'

    def create(self, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        validated_data['owner_id'] = owner_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        validated_data['owner_id'] = owner_pk

        return super().update(instance, validated_data)