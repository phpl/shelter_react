from rest_framework import viewsets, permissions

from .models import Animal
from .serializers import AnimalSerializer


class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = AnimalSerializer