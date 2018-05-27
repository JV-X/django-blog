from .article import Article


class Singleton(object):
    def __new__(cls, *args, **kw):
        if not hasattr(cls, '_instance'):
            orig = super(Singleton, cls)
            cls._instance = orig.__new__(cls, *args, **kw)
        return cls._instance


class BlogListManager(Singleton):

    def __init__(self):
        self.table = Article.objects

    def list_all(self):
        _list = []
        for e in self.table.filter(deleted=False):
            item = {
                "id": e.id,
                "title": e.title,
                "created_time": e.created_time,
                "updated_time": e.updated_time,
            }
            _list.append(item)

        return _list
