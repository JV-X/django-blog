from .article import Article


class Singleton(object):
    def __new__(cls, *args, **kw):
        if not hasattr(cls, '_instance'):
            orig = super(Singleton, cls)
            cls._instance = orig.__new__(cls, *args, **kw)
        return cls._instance


class ArticleFilter:
    AUTHOR = "author"
    CREATED_TIME = "created_time"
    UPDATED_TIME = "updated_time"
    TITLE = "title"
    TAG = "tag"
    COUNT = "count"
    CONTENT = "content"

    @classmethod
    def dict(cls):
        return {
            cls.AUTHOR: 0,
            cls.CREATED_TIME: 1,
            cls.UPDATED_TIME: 2,
            cls.TITLE: 3,
            cls.TAG: 4,
            cls.COUNT: 5,
            cls.CONTENT: 6,
        }


class ArticleSort:
    CREATED_TIME = "time"
    CREATED_TIME_REVERSE = "time_reverse"
    UPDATED_TIME = "updated_time"
    UPDATED_TIME_REVERSE = "title"

    @classmethod
    def dict(cls):
        return {
            cls.CREATED_TIME: 0,
            cls.CREATED_TIME_REVERSE: 1,
            cls.UPDATED_TIME: 2,
            cls.UPDATED_TIME_REVERSE: 3,
        }


class UserManager(Singleton):
    def __init__(self):
        self.table = Article.objects

    def query(self, **_filter):
        _filter['deleted'] = False

        r = self.table.fetch(**_filter)
        return r


class ArticleManager(Singleton):
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

    def query_articles(self, _filter=None, _sort=None):

        def build_filter_by_params(_filter):
            t = {}
            f = ArticleFilter

            for k, v in _filter:
                if k == f.dict()[f.AUTHOR]:
                    query = {"user_id": v}
                elif k == f.dict()[f.TAG]:
                    query = {"tag": v}
                elif k == f.dict()[f.TITLE]:
                    query = {"title__contains": v}
                elif k == f.dict()[f.CONTENT]:
                    query = {"content__contains": v}
                elif k == f.dict()[f.CREATED_TIME]:
                    query = {"created_time__gte": v[0], "created_time__lte": v[1]}
                elif k == f.dict()[f.UPDATED_TIME]:
                    query = {"updated_time__gte": v[0], "updated_time__lte": v[1]}
                else:
                    print(" not support key: k={}, v={},".format(k, v))
                    query = {}
                t.update(query)

            return t

        def build_article_by_model(e):
            _article = {
                "id": e.id,
                "tag": e.tag,
                "title": e.title,
                "author_name": UserManager().query(id=e.user_id).name,
                "author_id": e.user_id,
                "authority": e.authority,
            }
            return _article

        filters = build_filter_by_params(_filter)

        _list = [build_article_by_model(e) for e in self.query(**filters)]

        return _list

    def query(self, **_filter):
        _filter['deleted'] = False
        r = self.table.filter(**_filter)
        return r
