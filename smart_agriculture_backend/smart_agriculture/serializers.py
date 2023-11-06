from rest_framework import serializers
from smart_agriculture.functions import attempt_json_deserialize
from smart_agriculture.models import (Crop, CropCategory, Division, Fertilizer,
                                      Post, Profile, Zilla,
                                      ZillaCropFertilizer)


class PostSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = ['id', 'title', 'body', 'post_date', 'owner']

    def get_owner(self,obj):
        return str(obj.user.username)

    def create(self, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        owner_pk = attempt_json_deserialize(owner_pk, expect_type=str)
        validated_data['owner_id'] = owner_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        owner_pk = attempt_json_deserialize(owner_pk, expect_type=str)
        validated_data['owner_id'] = owner_pk

        return super().update(instance, validated_data)

class CropSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crop
        fields = ['id', 'name', 'species']

    def create(self, validated_data):
        request = self.context['request']

        crop_category_pk = request.data.get('crop_category')
        crop_category_pk = attempt_json_deserialize(crop_category_pk, expect_type=str)
        validated_data['crop_category_id'] = crop_category_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        crop_category_pk = request.data.get('crop_category')
        crop_category_pk = attempt_json_deserialize(crop_category_pk, expect_type=str)
        validated_data['crop_category_id'] = crop_category_pk

        return super().update(instance, validated_data)

class CropCategorySerializer(serializers.ModelSerializer):
    crops = CropSerializer(many=True, read_only=True)

    class Meta:
        model = CropCategory
        fields = ['id', 'name', 'crops']

class FertilizerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fertilizer
        fields = ['id', 'name', 'symbol']

class ZillaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zilla
        fields = ['id', 'name', 'office_contact']

    def create(self, validated_data):
        request = self.context['request']

        division_pk = request.data.get('division')
        division_pk = attempt_json_deserialize(division_pk, expect_type=str)
        validated_data['division_id'] = division_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        division_pk = request.data.get('division')
        division_pk = attempt_json_deserialize(division_pk, expect_type=str)
        validated_data['division_id'] = division_pk

        return super().update(instance, validated_data)

class DivisionSerializer(serializers.ModelSerializer):
    zillas = ZillaSerializer(many=True, read_only=True)

    class Meta:
        model = Division
        feilds = ['id', 'name', 'office_contact', 'zillas']

class ZillaCropFertilizerSerializer(serializers.ModelSerializer):
    zilla = ZillaSerializer(read_only=True)
    crop = CropSerializer(read_only=True)
    fertilizers = FertilizerSerializer(many=True, read_only=True)

    class Meta:
        model = ZillaCropFertilizer
        fields = ['id', 'measure', 'zilla', 'crop', 'fertilizers']

    def create(self, validated_data):
        request = self.context['request']

        zilla_pk = request.data.get('zilla')
        zilla_pk = attempt_json_deserialize(zilla_pk, expect_type=str)
        validated_data['zilla_id'] = zilla_pk

        crop_pk = request.data.get('crop')
        crop_pk = attempt_json_deserialize(crop_pk, expect_type=str)
        validated_data['crop_id'] = crop_pk

        fertilizer_pk = request.data.get('fertilizer')
        fertilizer_pk = attempt_json_deserialize(fertilizer_pk, expect_type=str)
        validated_data['fertilizer_id'] = fertilizer_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        zilla_pk = request.data.get('zilla')
        zilla_pk = attempt_json_deserialize(zilla_pk, expect_type=str)
        validated_data['zilla_id'] = zilla_pk

        crop_pk = request.data.get('crop')
        crop_pk = attempt_json_deserialize(crop_pk, expect_type=str)
        validated_data['crop_id'] = crop_pk

        fertilizer_pk = request.data.get('fertilizer')
        fertilizer_pk = attempt_json_deserialize(fertilizer_pk, expect_type=str)
        validated_data['fertilizer_id'] = fertilizer_pk

        return super().update(instance, validated_data)

class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.SerializerMethodField()
    zilla = ZillaSerializer(read_only=True)

    class Meta:
        model = Profile
        fields = ['id', 'owner', 'zilla', 'address']

    def get_owner(self,obj):
        return str(obj.user.username)

    def create(self, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        owner_pk = attempt_json_deserialize(owner_pk, expect_type=str)
        validated_data['owner_id'] = owner_pk

        return super().create(validated_data)

    def update(self, instance, validated_data):
        request = self.context['request']

        owner_pk = request.data.get('owner')
        owner_pk = attempt_json_deserialize(owner_pk, expect_type=str)
        validated_data['owner_id'] = owner_pk

        return super().update(instance, validated_data)