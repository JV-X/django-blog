import json


def owner_info():
    info = {
        "name": "向三",
        "welcome": "你好",
        "email": "xjv1195275315@gmail.com",
        "phone": 18408225544
    }

    info_json = json.dumps(info)

    return info_json


owner_info()
