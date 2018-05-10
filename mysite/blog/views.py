# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.template.response import TemplateResponse

from .owner import owner_info


def index(request):
    owenr = owner_info()
    ctx = {
        "key1": "value1",
        "key2": "value2",
        "owenr": owenr,
    }

    return TemplateResponse(request, "index.html", ctx)
