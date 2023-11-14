from django.utils import timezone
from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=512, blank=False, null=False)
    body = models.TextField(blank=True)
    post_date = models.DateTimeField(default=timezone.now, null=True, blank=True)
    owner = models.ForeignKey(
        "auth.User", 
        on_delete=models.SET_NULL,
        related_name='posts',
        null=True,
        blank=True
    )

    def __str__(self):
        return self.title

class CropCategory(models.Model):
    name = models.CharField(max_length=64, blank=False, null=False)

    def __str__(self):
        return self.name

class Crop(models.Model):
    name = models.CharField(max_length=64, blank=False, null=False)
    species = models.CharField(max_length=64, blank=False, null=False)
    crop_category = models.ForeignKey(
        CropCategory,
        on_delete=models.CASCADE,
        related_name='crops',
        blank=False,
        null=False
    )

    def __str__(self):
        return self.name

class Fertilizer(models.Model):
    name = models.CharField(max_length=128, blank=False, null=False)
    symbol = models.CharField(max_length=64, blank=True)

    def __str__(self):
        return self.name

class Division(models.Model):
    name = models.CharField(max_length=32, blank=False, null=False)
    office_contact = models.CharField(max_length=16)

    def __str__(self):
        return self.name

class Zilla(models.Model):
    name = models.CharField(max_length=32, blank=False, null=False)
    office_contact = models.CharField(max_length=16)
    division = models.ForeignKey(
        Division,
        on_delete=models.CASCADE,
        related_name='zillas',
        blank=False,
        null=False
    )

    def __str__(self):
        return self.name

class ZillaCropFertilizer(models.Model):
    measure = models.FloatField(default=0.0)
    zilla = models.ForeignKey(
        Zilla,
        on_delete=models.CASCADE,
        related_name='zillacropfertilizers',
        null=False,
        blank=False
    )
    crop = models.ForeignKey(
        Crop,
        on_delete=models.CASCADE,
        related_name='zillacropfertilizers',
        null=False,
        blank=False
    )
    fertilizer = models.ForeignKey(
        Fertilizer,
        on_delete=models.CASCADE,
        related_name='zillacropfertilizers',
        null=False,
        blank=False
    )

    def __str__(self):
        return '%f' % (self.measure)

class Profile(models.Model):
    owner = models.ForeignKey(
        "auth.User", 
        on_delete=models.SET_NULL,
        related_name='profiles',
        null=True,
        blank=True
    )
    zilla = models.ForeignKey(
        Zilla,
        on_delete=models.CASCADE,
        related_name='profiles',
        null=False,
        blank=True
    )
    address = models.CharField(max_length=512, blank=True, null=False)

