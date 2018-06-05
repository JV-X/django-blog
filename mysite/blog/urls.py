from django.urls import path
from . import views

urlpatterns = [
    path('blog', views.index, name='blog'),
    path('blog/list', views.blog_list, name='blog.list'),
]
