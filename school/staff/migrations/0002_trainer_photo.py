# Generated by Django 3.0.6 on 2020-06-30 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='trainer',
            name='photo',
            field=models.ImageField(null=True, upload_to='photo'),
        ),
    ]
