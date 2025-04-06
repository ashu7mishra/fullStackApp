from rest_framework import serializers
from .models import *


class CountrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Country
        fields = ('id', 'name')
        

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ('id', 'name')
        
        
class CharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Characteristics
        fields = ('id', 'name')
        
        
class FootballClubSerializer(serializers.ModelSerializer):
    league_details = LeagueSerializer(source='league', read_only=True)
    country_details = CountrySerializer(source='country', read_only=True)
    # characteristics_details = CharacteristicsSerializer(source='characteristics', read_only=True, many=True)
    characteristics_names = serializers.SerializerMethodField()
    class Meta:
        model = FootballClub
        fields = "__all__"
        
    def get_characteristics_names(self, obj):
        return [char.name for char in obj.characteristics.all()]