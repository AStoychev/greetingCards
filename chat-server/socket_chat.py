import socketio

from find_items.search_cards import search_for_item

from chat_core.chat import get_response

socket = socketio.AsyncServer(
    async_mode="asgi", cors_allowed_origins="http://localhost:3001"
)

sio_app = socketio.ASGIApp(socketio_server=socket, socketio_path="socket.io")


@socket.event
async def connect(sid, enviren, auth):
    print(f"{sid}: connected")


@socket.on("say_hello")
async def say_hello(sid, data):
    content = {
        "author": "ChatBot",
        "message": f'Hello {data["username"]} I\'am a new ChatBot in Greting cards! How can I help You?',
        "url_route": "",
    }

    await socket.emit("receive_automessage", content)


@socket.on("send_message")
async def send_message(sid, data):
    response = get_response(data["content"]["message"])
    content = {
        "author": "ChatBot",
        "message": f"{response}",
        "url_route": "",
    }

    # Have to create validator for data

    await socket.emit("receive_automessage", content)
