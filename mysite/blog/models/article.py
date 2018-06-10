from django.db import models

from .base import Base
from .status import Authority


class Article(Base):

    user_id = models.IntegerField(null=False)
    content = models.TextField()
    title = models.TextField()
    authority = models.IntegerField(choices=Authority.STATUS_CHOICES)
    tags = models.TextField(default="")

    class Meta:
        db_table = 'Article'
