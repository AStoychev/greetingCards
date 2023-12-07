import io from 'socket.io-client'

import { createContext, useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

let socket;
const CONNECTION_PORT = 'localhost:3030/'

export const ChatContext = createContext();

export const ChatProvider = ({
    children,
}) => {

    // Before Login
    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState();
    const [username, setUsername] = useState('');

    // After Login
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        socket = io(CONNECTION_PORT)
    }, [CONNECTION_PORT]);

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessageList([...messageList, data])
        });
    },[messageList]);

    const connectToTheRoom = (data) => {
        setLoggedIn(true);
        setRoom(data.room);
        setUsername(data.username)

        socket.emit('join_room', data);
    }


    // Try send auto meesage
    useEffect(() => {
        socket.on('receive_automessage', (data) => {
            console.log(data)
            setMessageList([...messageList, data])
        });
    },[messageList]);
    const sendGreetingMessage = (userRoom, name) => {
        let data = {
            room: userRoom,
            username: name
        }
        socket.emit('say_hello', data)
    }
    // Try send auto meesage

    const sendMessage = async (data) => {
        setMessage(data.message)

        let messageContent = {
            room: room,
            content: {
                author: username,
                message: data.message,
            },
        };

        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content])
        // setMessage('');
    }

    const contextValues = {
        room,
        username,
        loggedIn,
        message,
        messageList,
        connectToTheRoom,
        sendGreetingMessage,
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