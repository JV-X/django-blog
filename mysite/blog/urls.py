from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='blog'),
    path('/list', views.blog_list, name='blog.list'),
]
