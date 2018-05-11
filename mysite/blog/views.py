# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.template.response import TemplateResponse

from .owner import owner_info


def index(request):
    owner = owner_info()
    ctx = {
        "key1": "value1",
        "key2": "value2",
        "owner": owner,
    }

    return TemplateResponse(request, "welcome.html", ctx)
