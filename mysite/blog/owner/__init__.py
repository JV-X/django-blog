import json


def owner_info():
    info = {
        "name": "向三",
        "welcome": "你好",
        "email": "xjv1195275315@gmail.com",
        "phone": 1111111111111111
    }

    info_json = json.dumps(info, ensure_ascii=False)

    return info_json


owner_info()
