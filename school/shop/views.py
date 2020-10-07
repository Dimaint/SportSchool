from django.shortcuts import render
from rest_framework import viewsets

from .models import Products, Orders
from .serializers import ProductsSerializer, OrdersSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    queryset = Products.objects.all()
    serializer_class = ProductsSerializer
    # http_method_names = ['get']


class OrdersViewSet(viewsets.ModelViewSet):
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer
    http_method_names = ['get', 'post', 'put']