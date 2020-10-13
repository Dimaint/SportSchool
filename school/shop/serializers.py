from .models import Products, Orders
from rest_framework import serializers


class ProductsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Products
        fields = ('id', 'name', 'price', 'photo', 'description', 'characteristics', 'type')


class OrdersSerializer(serializers.ModelSerializer):
    cart = serializers.JSONField()

    class Meta:
        model = Orders
        fields = '__all__'
        # (
        # 'id', 'firstName', 'lastName', 'middleName', 'email', 'phone', 'address', 'message', 'cart', 'cartTotalCost',
        # 'status')
