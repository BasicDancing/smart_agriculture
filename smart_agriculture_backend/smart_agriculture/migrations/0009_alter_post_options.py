# Generated by Django 4.2.6 on 2023-11-22 22:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('smart_agriculture', '0008_alter_post_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-post_date']},
        ),
    ]
