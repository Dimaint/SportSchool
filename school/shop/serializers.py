from .models import Products
from rest_framework import serializers


class ProductsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Products
        fields = ('id', 'name', 'price', 'photo', 'description', 'characteristics', 'type')
