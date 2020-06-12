from django.db import models
from django.utils import timezone


class Groups(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class Parents(models.Model):
    name1 = models.CharField(max_length=50, verbose_name='ФИО', default='Dad')
    phone1 = models.CharField(max_length=11, default=0)
    name2 = models.CharField(max_length=50, verbose_name='ФИО', default='Mom')
    phone2 = models.CharField(max_length=11, default=0)

    def __str__(self):
        return self.name1


class Kids(models.Model):
    first_name = models.CharField(max_length=30, verbose_name='Имя')
    last_name = models.CharField(max_length=30, verbose_name='Фамилия')
    birthday = models.DateField(default=timezone.now)

    parents = models.ForeignKey(Parents, on_delete=models.CASCADE, null=True)

    SPORT_CATEGORY = (
        ('CMS', 'КМС'),
        ('MS', 'МС'),
        ('S1', '1-спортивный'),
        ('S2', '2-спортивный'),
        ('S3', '3-спортивный'),
        ('Y1', '1-юношеский'),
        ('Y2', '2-юношеский'),
        ('Y3', '3-юношеский'),
        ('YF', 'Юный фигурист'),
    )
    sportCategory = models.CharField(max_length=3, choices=SPORT_CATEGORY, default='YF', verbose_name='Разряд')
    photo = models.ImageField(upload_to='photo', null=True)

    def __str__(self):
        return self.last_name
