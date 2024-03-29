# Generated by Django 4.2.6 on 2023-11-13 15:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('smart_agriculture', '0005_alter_zillacropfertilizer_crop_and_more'),
    ]

    operations = [
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
