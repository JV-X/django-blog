from django.db import models

from .base import Base
from .status import Authority


class Comment(Base):

    user_id = models.IntegerField(null=False)
    content = models.TextField()
    authority = models.IntegerField(choices=Authority.STATUS_CHOICES)

    class Meta:
        db_table = 'Comment'
