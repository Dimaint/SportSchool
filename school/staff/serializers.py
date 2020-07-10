from rest_framework import serializers
from .models import Trainer


class TrainerSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Trainer
        fields = ('id', 'name', 'phone', 'photo')
