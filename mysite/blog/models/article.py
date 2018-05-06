from django.db import models

from mysite.blog.models.base import Base
from mysite.blog.models.status import Authority


class Article(Base):

    user_id = models.IntegerField(null=False)
    content = models.TextField()
    authority = models.IntegerField(choices=Authority.STATUS_CHOICES)

    class Meta:
        db_table = 'Article'
