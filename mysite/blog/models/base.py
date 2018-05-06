from django.db import models


class Base(models.Model):

    id = models.IntegerField(primary_key=True)
    created_time = models.DateTimeField(auto_now_add=True)
    updated_time = models.DateTimeField(auto_now=True)
    deleted = models.BooleanField(default=False)

