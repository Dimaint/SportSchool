# Generated by Django 3.0.6 on 2020-05-31 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kids', '0008_kids_status'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='kids',
            name='status',
        ),
        migrations.AddField(
            model_name='kids',
            name='sportCategory',
            field=models.CharField(choices=[('CMS', 'Кандидат'), ('MS', 'On loan'), ('S1', 'Available'), ('S2', 'Reserved'), ('S3', 'Maintenance'), ('Y1', 'On loan'), ('Y2', 'Available'), ('Y3', 'Reserved'), ('YF', 'Maintenance')], default='YF', max_length=3, verbose_name='Разряд'),
        ),
    ]
