from .models import Kids, Parents, Groups, VisitsLog, Tickets
from staff.models import Trainer
from rest_framework import serializers


class KidsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Kids
        fields = ('id', 'first_name', 'last_name', 'birthday', 'sportCategory')


class ParentsSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Parents
        fields = ('id', 'name1', 'phone1', 'name2', 'phone2')


class TrainerSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Trainer
        fields = ('id', 'name')


class GroupSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = Groups
        fields = ('id', 'name', 'description', 'days')


class TicketsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tickets
        fields = '__all__'


class KidVisitLogSerializer(serializers.ModelSerializer):
    # dates = serializers.JSONField()

    class Meta:
        model = VisitsLog
        # fields = ('id', 'fullName', 'dates')
        fields = '__all__'


class KidDetailSerializer(serializers.ModelSerializer):
    parents = ParentsSerializer(read_only=True)
    trainer = TrainerSerializer(read_only=True)
    group = GroupSerializer(read_only=True)
    tickets = TicketsSerializer(read_only=True)
    visitsLog = KidVisitLogSerializer(read_only=True)

    class Meta:
        model = Kids
        fields = (
            'id',
            'first_name',
            'last_name',
            'birthday',
            'sportCategory',
            'photo',
            'parents',
            'trainer',
            'group',
            'tickets',
            'visitsLog')
