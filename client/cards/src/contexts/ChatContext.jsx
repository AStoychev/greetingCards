import io from 'socket.io-client'

import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { cardServiceFactory } from "../services/cardService";

let socket;
const CONNECTION_PORT = 'localhost:3030/'

export const ChatContext = createContext();

export const ChatProvider = ({
    children,
}) => {
    const navigate = useNavigate();

    // Before Login
    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState('Class of 2023');
    const [username, setUsername] = useState('');

    // After Login
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, [CONNECTION_PORT])

    const connectToTheRoom = (data) => {
        setLoggedIn(true);
        setRoom(data.room);
        setUsername(data.username)

        socket.emit('join_room', room, username)
    }

    const sendMessage = (data) => {
        setMessage(data.message)

        let messageContent = {
            room: room,
            content: {
                author: username,
                message: message
            }
        }

        socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content])
        // setMessage('');
    }


    console.log(111111111, messageList)

    const contextValues = {
        room,
        username,
        loggedIn,
        message,
        messageList,
        connectToTheRoom,
        sendMessage,
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