# Generated by Django 3.0.6 on 2020-06-08 09:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kids', '0010_auto_20200531_2106'),
    ]

    operations = [
        migrations.RenameField(
            model_name='kids',
            old_name='Birthday',
            new_name='birthday',
        ),
    ]
