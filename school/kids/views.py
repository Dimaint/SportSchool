from django.shortcuts import render
from rest_framework import viewsets

from .models import Kids
from .serializers import KidsSerializer
from .serializers import KidDetailSerializer


class KidsViewSet(viewsets.ModelViewSet):
    queryset = Kids.objects.all().order_by('last_name')
    serializer_class = KidsSerializer


class KidDetailViewSet(viewsets.ModelViewSet):
    queryset = Kids.objects.all()
    serializer_class = KidDetailSerializer


