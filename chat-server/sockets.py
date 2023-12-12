import socketio

from find_items.search_cards import search_for_item

socket = socketio.AsyncServer(
    async_mode="asgi", cors_allowed_origins="http://localhost:3000"
)

sio_app = socketio.ASGIApp(socketio_server=socket, socketio_path="socket.io")

TYPES = ["card", "box"]
OCCASION = ["birthday", "anniversaries", "wedding"]
MORE_DETAILS = ["gender", "age"]
context = {"type": [], "occasion": [], "more_details": []}


def context_values(data):
    seachType = ""
    if len(data) > 1:
        seachType = " and ".join(data)
        return seachType
    else:
        seachType = "".join(data)
        return seachType


@socket.event
async def connect(sid, enviren, auth):
    print(f"{sid}: connected")


@socket.on("say_hello")
async def say_hello(sid, data):
    content = {
        "author": "ChatBot",
        "message": f'Hello {data["username"]} I\'am a new ChatBot in Greting cards! How can I help You?',
    }

    await socket.emit("receive_automessage", content)


@socket.on("send_message")
async def send_message(sid, data):
    message = data["content"]["message"].lower()
    content = {
        "author": "ChatBot",
        "message": "I can't undestand you! Can you repeat your question more detailed?",
    }

    # Select Type
    def find_type(send_message):
        types = []
        for word in send_message.split():
            if word in TYPES:
                types.append(word)
        return types

    # Select Type

    # Select Occasion
    def find_ocassion(send_message):
        occasion = []
        for word in send_message.split():
            if word in OCCASION:
                occasion.append(word)
        return occasion

    # Select Occasion

    # Select More Details

    if find_type(message):
        context["type"] = find_type(message)
        content[
            "message"
        ] = f'What occasion is the {context_values(context["type"])} for?'
        await socket.emit("receive_automessage", content)
    elif find_ocassion(message):
        context["occasion"] = find_ocassion(message)
        content[
            "message"
        ] = f'Do you have preferences for gender or age or to search all {context_values(context["type"])} for {context_values((context["occasion"]))}'
        await socket.emit("receive_automessage", content)
    elif context["occasion"]:
        if "all" or "not" in message:
            context["more_details"] = "all"
            content[
                "message"
            ] = f'Plese wait while I looking for all {context_values(context["type"])} related with {context_values((context["occasion"]))}'
            await socket.emit("receive_automessage", content)
    else:
        await socket.emit("receive_automessage", content)


@socket.on("disconnect")
async def disconnect():
    print("USER DISCONNECTED")