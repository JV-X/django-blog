from django.urls import path
from . import views, api

urlpatterns = [
    # view
    path('blog', views.index, name='blog'),
    path('blog/list', views.blog_list, name='blog.list'),

    # api
    path("api/articles", api.articles),
    path("api/articles/config", api.articles_config),
]
