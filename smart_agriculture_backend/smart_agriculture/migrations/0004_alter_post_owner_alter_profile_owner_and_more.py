# Generated by Django 4.2.6 on 2023-11-13 15:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('smart_agriculture', '0003_alter_zilla_division'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='posts', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='profile',
            name='owner',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='profiles', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='profile',
            name='zilla',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='profiles', to='smart_agriculture.zilla'),
        ),
        migrations.AlterField(
            model_name='zillacropfertilizer',
            name='crop',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='zillacropfertilizers', to='smart_agriculture.crop'),
        ),
        migrations.AlterField(
            model_name='zillacropfertilizer',
            name='fertilizer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='zillacropfertilizers', to='smart_agriculture.fertilizer'),
        ),
        migrations.AlterField(
            model_name='zillacropfertilizer',
            name='zilla',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='zillacropfertilizers', to='smart_agriculture.zilla'),
        ),
    ]
