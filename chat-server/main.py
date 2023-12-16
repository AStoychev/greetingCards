import asyncio

import uvicorn
from fastapi import FastAPI

from sockets import sio_app
# from socket_chat import sio_app

app = FastAPI()

app.mount('/', app=sio_app)

@app.get('/')
async def home():
    return{'message': 'Server Starting on Port 8001'}

if __name__ == '__main__':
    uvicorn.run('main:app', port=8001, reload=True)
    # uvicorn.run('main:app', reload=True)