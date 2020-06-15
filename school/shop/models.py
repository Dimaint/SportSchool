from django.db import models


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
