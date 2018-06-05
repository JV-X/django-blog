# -*- coding: utf-8 -*-

from django.template.response import TemplateResponse

from .owner import owner_info


def index(request):
    data = owner_info()

    return TemplateResponse(request, "welcome.html", {"data": data})


def blog_list(request):

    return TemplateResponse(request, "blog_list.html", {})
