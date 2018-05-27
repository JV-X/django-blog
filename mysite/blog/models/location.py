from django.db import models

from .base import Base


class Location(Base):

    user_id = models.IntegerField(null=False)
    content = models.TextField()

    class Meta:
        db_table = 'Article'
