from django.db import models

from .base import Base
from .status import Character


class User(Base):

    character = models.IntegerField(choices=Character.STATUS_CHOICES)
    name = models.CharField(null=False)
    password = models.CharField(null=False)
    email = models.CharField(null=False)
    phone = models.IntegerField()

    class Meta:
        db_table = 'User'
