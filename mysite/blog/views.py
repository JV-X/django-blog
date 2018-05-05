# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.http import HttpResponse
from django.shortcuts import render
from django.template.response import TemplateResponse


def index(request):
    ctx = {
        "key1": "value1",
        "key2": "value2",
    }
    return TemplateResponse(request, "index.html", ctx)
