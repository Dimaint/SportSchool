# Generated by Django 3.0.6 on 2020-06-30 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Trainer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='ФИО', max_length=50, verbose_name='ФИО')),
                ('phone', models.CharField(default=7, max_length=11)),
            ],
        ),
    ]
