import { useState, useEffect, useContext, useRef } from "react";

import { Link } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";

import { ChatContext } from "../../../contexts/ChatContext";

import { IoSend } from "react-icons/io5";
import styles from "./ChatWindow.module.css"

export const ChatWindow = ({
    closeChat,
}) => {

    const { connectToTheRoom, sendGreetingMessage, sendMessage, acceptItems, loggedIn, room, username, message, messageList } = useContext(ChatContext);
    const { values, changeHandler, onSubmit } = useForm({
        room: '',
        username: '',
        message: '',
        messageList: [],
        acceptItems: false,
    }, !loggedIn ? connectToTheRoom : sendMessage);

    const ref = useRef(null);

    const scroolBottom = () => {
        ref.current?.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(() => {
        scroolBottom()
    }, [messageList]);

    const onClickClose = () => {
        closeChat()
    };

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            onSubmit(e)
        }
    }

    const onLoadChat = (e) => {
        onSubmit(e)
        sendGreetingMessage(values.room, values.username)
    }
    

    const catchItems = () => {
        acceptItems(true)
    }

    return (
        <div className={styles.chatFieldContainer}>
            <div className={styles.closeButton} onClick={onClickClose}>X</div>
            <div className={styles.chatMenuWrapper}>
                <h3>Hi there {username}!</h3>
            </div>
            {!loggedIn ?
                <div className={styles.chatClientData}>
                    <h3>Plese write your Room and Username</h3>
                    <form>
                        <label htmlFor="room"></label>
                        <input
                            type="text"
                            id="room"
                            placeholder="Room"
                            name="room"
                            value={values.room}
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                        <div>
                            <input
                                type="submit"
                                name="submit"
                                onClick={onLoadChat}
                                value="Let's chat"
                                disabled={values.room && values.username ? false : true}
                            />
                        </div>
                    </form>
                </div>
                :
                <div>
                    <div className={styles.messageContent}>
                        {messageList.map((key, value) => {
                            return <div className={styles.messageData} key={value} ref={ref}>
                                {username === key.author ?
                                    <div className={styles.userWrapper}>
                                        <div className={styles.user}>
                                            <b>You</b>: {key.message}
                                        </div>
                                    </div>
                                    :
                                    <div className={styles.adminWrapper}>
                                        <div className={styles.admin}>
                                            <b>{key.author}</b>:
                                            {key.message}
                                            {key.url_route ? key.url_route.map((data) => {
                                                return (
                                                    <div key={data.id_url}>
                                                        <Link to={data.id_url} className={styles.showItems} target="_blank" onLoad={catchItems}>
                                                            <div className={styles.chatFindItem}>
                                                                <img src={data.image} />
                                                                <div className={styles.titleAndPrice}>
                                                                    <h4>{data.title}</h4>
                                                                    <span>${data.price}</span>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                )
                                            }) : ''
                                            }
                                        </div>
                                    </div>
                                }
                                {/* <p className={styles.messegaAuthor}>{key.message}</p> */}
                            </div>
                        })}
                    </div>

                    <div className={styles.inputWrapper}>
                        <form>
                            <label htmlFor="message"></label>
                            <input
                                type="text"
                                id="message"
                                placeholder="Enter Your Message..."
                                name="message"
                                value={values.message}
                                onChange={changeHandler}
                                onKeyDown={onEnterPress}
                            />
                            <button className={styles.submitWrapper} onClick={onSubmit}>
                                <IoSend className={styles.submitIcon} />
                            </button>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}