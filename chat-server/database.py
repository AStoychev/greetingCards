from pymongo import MongoClient

myclient = MongoClient("mongodb://127.0.0.1:27017/")
db_name = myclient["greeting_cards"]
card = db_name["cards"]