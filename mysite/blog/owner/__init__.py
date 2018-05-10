import json


def load_owner_info():
    with open("info.json") as f:
        info = json.loads(f, encoding="utf-8")
        print(info)

    return info


load_owner_info()
