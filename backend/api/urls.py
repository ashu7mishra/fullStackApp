from django.contrib import admin
from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('country', CountryViewSet, basename='country')
router.register('league', LeagueViewSet, basename='league')
router.register('characteristics', CharacteristicsViewSet, basename='characteristics')
router.register('footballclub', FootballClubViewSet, basename='footballclub')

urlpatterns = router.urls
