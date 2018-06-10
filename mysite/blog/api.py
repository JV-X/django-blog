# -*- coding: utf-8 -*-
from django.http import JsonResponse

from .models import ArticleManager, ArticleFilter, ArticleSort


def articles_config(request):
    sort_way = [e for e in ArticleSort.dict().keys()]
    filter_way = [e for e in ArticleFilter.dict().keys()]

    print(sort_way)
    print(filter_way)
    response = {
        "sort_way": sort_way,
        "filter_way": filter_way,
    }

    return JsonResponse(response)


def articles(request):
    _sort = request.POST.get("sort_ways", [])
    _filter = request.POST.get("filter_ways", [])

    _articles = ArticleManager().query_articles(_filter=_filter, _sort=_sort)

    response = {
        "articles": _articles
    }
    return JsonResponse(response)
