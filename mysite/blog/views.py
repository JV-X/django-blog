# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render
from django.template.response import TemplateResponse

from mysite.blog.owner import *


def index(request):
    owenr = load_owner_info()
    ctx = {
        "key1": "value1",
        "key2": "value2",
        "owenr": owenr,
    }
    print(load_owner_info())
    return TemplateResponse(request, "index.html", ctx)
