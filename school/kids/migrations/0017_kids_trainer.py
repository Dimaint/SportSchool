# Generated by Django 3.0.6 on 2020-06-30 07:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('staff', '0002_trainer_photo'),
        ('kids', '0016_auto_20200630_1309'),
    ]

    operations = [
        migrations.AddField(
            model_name='kids',
            name='trainer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='staff.Trainer'),
        ),
    ]