from django.db import models
from django.contrib.postgres.fields import JSONField


class Products(models.Model):
    name = models.CharField(max_length=60, verbose_name='Название товара')
    price = models.IntegerField(verbose_name="Цена")
    photo = models.ImageField(upload_to='products', null=True)
    description = models.TextField(verbose_name='Краткое описание товара')
    characteristics = models.TextField(verbose_name='Характеристики товара', default='none')

    PRODUCTS_TYPE = (
        ('разное', 'Разное'),
        ('ботинки', 'Ботинки'),
        ('лезвия', 'Лезвия'),
        ('костюм', 'Костюм'),
    )
    type = models.CharField(max_length=20, choices=PRODUCTS_TYPE, default='разное', verbose_name='Тип товара')

    def __str__(self):
        return self.name


class Orders(models.Model):
    firstName = models.CharField(max_length=30, verbose_name="Имя")
    lastName = models.CharField(max_length=30, verbose_name="Фамилия")
    middleName = models.CharField(max_length=30, verbose_name="Отчество", blank="true")
    email = models.CharField(max_length=100, verbose_name="Э.Почта")
    phone = models.CharField(max_length=12, verbose_name="Телефон")
    address = models.TextField(verbose_name='Адрес доставки', default='')
    message = models.TextField(verbose_name='Сообщение заказчика', default='', blank="true")
    cart = JSONField(blank="true") #сменить на false
    cartTotalCost = models.CharField(max_length=100, verbose_name="Итоговая цена")
    STATUSES = (
        ('Создан', 'Создан'),
        ('Принят', 'Принят'),
        ('Подготавливается', 'Подготавливается'),
        ('Доступен', 'Доступен'),
        ('На доставке', 'На доставке'),
        ('Доставлен', 'Доставлен'),

    )
    status = models.CharField(max_length=20, choices=STATUSES, default='Создан')
    isComplete = models.BooleanField(default=False)