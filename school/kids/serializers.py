from rest_framework.relations import PrimaryKeyRelatedField

from .models import Kids, Parents
from rest_framework import serializers


class KidsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Kids
        fields = ('first_name', 'last_name', 'Birthday', 'sportCategory')


class ParentsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Parents
        fields = ('id', 'name1', 'phone1', 'name2', 'phone2')


class KidDetailSerializer(serializers.ModelSerializer):
    parents = ParentsSerializer(read_only=True)

    class Meta:
        model = Kids
        fields = ('first_name', 'last_name', 'Birthday', 'sportCategory', 'parents')
