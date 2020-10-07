from django.db import models
from django.utils import timezone
from django.contrib.postgres.fields import JSONField


class Tickets(models.Model):
    fullName = models.CharField(max_length=200)
    tickets = models.IntegerField(verbose_name='Оставшиеся дни посешений.', default=0)

    def __str__(self):
        return self.fullName


class VisitsLog(models.Model):
    fullName = models.CharField(max_length=200)
    dates = JSONField(blank=True)

    def __str__(self):
        return self.fullName


class Groups(models.Model):
    name = models.CharField(max_length=40)
    description = models.TextField(verbose_name='Краткое описание группы', default='')
    WEEK_DAYS = (
        ('1,3,5', 'Вторник/Четверг'),
        ('2,4,5', 'Понедельник/Среда'),

    )
    days = models.CharField(max_length=30, choices=WEEK_DAYS, default='none')

    # time = models.TimeField(auto_now=True, auto_now_add=False)

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
        ('КМС', 'КМС'),
        ('МС', 'МС'),
        ('1-спортивный', '1-спортивный'),
        ('2-спортивный', '2-спортивный'),
        ('3-спортивный', '3-спортивный'),
        ('1-юношеский', '1-юношеский'),
        ('2-юношеский', '2-юношеский'),
        ('3-юношеский', '3-юношеский'),
        ('Юный фигурист', 'Юный фигурист'),
    )
    sportCategory = models.CharField(max_length=30, choices=SPORT_CATEGORY, default='Юный фигурист',
                                     verbose_name='Разряд')
    photo = models.ImageField(upload_to='photo', null=True)
    trainer = models.ForeignKey('staff.Trainer', on_delete=models.CASCADE, null=True)
    group = models.ForeignKey(Groups, on_delete=models.CASCADE, null=True)
    visitsLog = models.OneToOneField(VisitsLog, on_delete=models.SET_NULL, null=True, blank=True)
    tickets = models.OneToOneField(Tickets, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.last_name
