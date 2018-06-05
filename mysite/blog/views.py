# -*- coding: utf-8 -*-
from __future__ import unicode_literals

import json

from django.template.response import TemplateResponse

from .models import BlogListManager
from .owner import owner_info


def index(request):
    data = owner_info()

    return TemplateResponse(request, "welcome.html", {"data": data})


def blog_list(request):

    return TemplateResponse(request, "blog_list.html")
