# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.


class Animal(models.Model):
    name = models.CharField(max_length=255)
    commonName = models.CharField(max_length=255)
    scientificName = models.CharField(max_length=255)
    gender = models.CharField(max_length=255)
    adoptionInProgress = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name + self.commonName + self.scientificName + self.gender + self.adoptionInProgress
