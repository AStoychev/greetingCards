import socketio

socket = socketio.AsyncServer(
    async_mode="asgi",
    cors_allowed_origins="http://localhost:3000"
    # cors_allowed_origins=['*']
    # cors_allowed_origins=[]
)

sio_app = socketio.ASGIApp(
    socketio_server=socket,
    socketio_path="socket.io"
    # socketio_path='sockets'
)


@socket.event
async def connect(sid, enviren, auth):
    print(f"{sid}: connected")


@socket.on("join_room")
async def join_room(sid, data):
    
    content = {
        'author': 'ChatBot',
        'message': f'Hello {data["username"]} I\'am a new ChatBot in Greting cards! How I can help You?'
    }
    
    await socket.emit('receive_automessage', content)

@socket.on("disconnect")
async def disconnect():
    print('USER DISCONNECTED')