from django.shortcuts import render
from rest_framework import viewsets

from .serializers import TrainerSerializer
from .models import Trainer


class TrainerViewSet(viewsets.ModelViewSet):
    queryset = Trainer.objects.all()
    serializer_class = TrainerSerializer
