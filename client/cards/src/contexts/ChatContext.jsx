import io from 'socket.io-client'

import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { cardServiceFactory } from "../services/cardService";

let socket;
const CONNECTION_PORT = 'localhost:3000/'

export const ChatContext = createContext();

export const ChatProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    const [room, setRoom] = useState('');
    const [userName, setUserName] = useState('');

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, [CONNECTION_PORT])

    const connectToTheRoom = (data) => {
        setRoom(data.room);
        setUserName(data.username)
        
        socket.emit('join_room', room)
    }


    const contextValues = {
        room,
        userName,
        connectToTheRoom,
    };

    return (
        <ChatContext.Provider value={contextValues}>
            {children}
        </ChatContext.Provider>
    );
};

export const useChatContext = () => {
    const context = useContext(ChatContext);
    return context;
};