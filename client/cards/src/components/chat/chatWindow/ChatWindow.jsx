import { useState, useContext } from "react";

import { useForm } from "../../../hooks/useForm";

import { ChatContext } from "../../../contexts/ChatContext";

import { IoSend } from "react-icons/io5";
import styles from "./ChatWindow.module.css"

export const ChatWindow = ({
    closeChat,
}) => {

    const { connectToTheRoom, sendMessage, loggedIn, room, username } = useContext(ChatContext);
    const { values, changeHandler, onSubmit } = useForm({
        room: '',
        username: '',
        message: '',
        messageList: [],
    }, !loggedIn ? connectToTheRoom : sendMessage)

    // const changeMessageHandler = (e) => {
    //     onSubmit(e)
    // }

    const onClickClose = () => {
        closeChat()
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
                            placeholder="Room"
                            name="room"
                            value={values.room}
                            onChange={changeHandler}
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={values.username}
                            onChange={changeHandler}
                        />
                        <div>
                            <input
                                type="submit"
                                name="submit"
                                onClick={onSubmit}
                                value="Let's chat"
                                disabled={values.room && values.username ? false : true}
                            />
                        </div>
                    </form>
                </div>
                :
                <div>
                    <div className={styles.messageContent}>
                        Message
                    </div>

                    <div className={styles.inputWrapper}>
                        <form>
                            <label htmlFor="text"></label>
                            <input
                                type="text"
                                placeholder="Enter Your Message..."
                                name="message"
                                value={values.message}
                                onChange={changeHandler}
                            />

                            <div className={styles.submitWrapper}>
                                <IoSend className={styles.submitIcon} onClick={onSubmit} />
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}