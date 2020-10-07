from django.shortcuts import render
from rest_framework import viewsets


from .models import Kids, VisitsLog, Tickets
from .serializers import KidsSerializer
from .serializers import KidDetailSerializer, KidVisitLogSerializer, TicketsSerializer


class KidsViewSet(viewsets.ModelViewSet):
    queryset = Kids.objects.all().order_by('last_name')
    serializer_class = KidsSerializer
    # http_method_names = ['get', 'put', 'post']


class KidDetailViewSet(viewsets.ModelViewSet):
    queryset = Kids.objects.all()
    serializer_class = KidDetailSerializer
    # http_method_names = ['get']


class KidVisitsViewSet(viewsets.ModelViewSet):
    queryset = VisitsLog.objects.order_by('fullName')
    serializer_class = KidVisitLogSerializer
    # http_method_names = ['get', 'post', 'patch']


class TicketsViewSet(viewsets.ModelViewSet):
    queryset = Tickets.objects.all()
    serializer_class = TicketsSerializer

