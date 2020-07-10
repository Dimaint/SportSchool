from django.db import models


# Create your models here.
class Trainer(models.Model):
    name = models.CharField(max_length=50, verbose_name='ФИО', default='ФИО')
    phone = models.CharField(max_length=11, default=+7)
    photo = models.ImageField(upload_to='photo', null=True)

    def __str__(self):
        return self.name
