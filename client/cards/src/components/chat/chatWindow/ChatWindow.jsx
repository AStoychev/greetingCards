import { useState, useContext } from "react";

import { useForm } from "../../../hooks/useForm";

import { ChatContext } from "../../../contexts/ChatContext";

import { IoSend } from "react-icons/io5";
import styles from "./ChatWindow.module.css"

export const ChatWindow = ({
    closeChat,
}) => {

    const [chatDisplay, setChatDisplay] = useState('none');
    const [chatUserData, setChatUserData] = useState('block');

    const { connectToTheRoom } = useContext(ChatContext);
    const { values, changeHandler, onSubmit } = useForm({
        room: '',
        username: '',
    }, connectToTheRoom)

    const changeMessageHandler = (e) => {
        setChatDisplay('block');
        setChatUserData('none');

        onSubmit(e)
    }

    const onClickClose = () => {
        closeChat()
    }

    return (
        <div className={styles.chatFieldContainer}>
            <div className={styles.closeButton} onClick={onClickClose}>X</div>
            <div className={styles.chatMenuWrapper}>
                <h3>Hi there!</h3>
            </div>

            {/* <div style={{ display: 'block' }} className={styles.chatClientData}>
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
                            onClick={changeMessageHandler}
                            value="Let's chat"
                        />
                    </div>
                </form>
            </div> */}

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
                            name="text"
                            value={values.room}
                            onChange={changeHandler}
                        />

                        <div className={styles.submitWrapper}>
                            <IoSend className={styles.submitIcon} onClick={changeMessageHandler} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}