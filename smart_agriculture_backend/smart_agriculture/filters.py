import django_filters
from .models import ZillaCropFertilizer

class ZillaCropFilter(django_filters.FilterSet):
    zilla__id = django_filters.NumberFilter(field_name='zilla__id')
    crop__id = django_filters.NumberFilter(field_name='crop__id')

    class Meta:
        model = ZillaCropFertilizer
        fields = ['zilla__id', 'crop__id']