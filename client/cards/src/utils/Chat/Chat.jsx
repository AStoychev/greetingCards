import { useState } from "react";

import { ChatWindow } from "./ChatWindow/ChatWindow";

import { PiWechatLogoDuotone } from "react-icons/pi";
import styles from "./Chat.module.css"

export const Chat = () => {

    const [openChat, setOpenChat] = useState('')

    const closeChat = () => {
        setOpenChat("")
    }

    const openChatField = () => {
        setOpenChat(<ChatWindow closeChat={closeChat}/>)
    }
    return (
        <div className={styles.container}>
            <div className={styles.chatWrapper}>
                {openChat}
            </div>
            <div className={styles.chatIconWrapper}>
                <PiWechatLogoDuotone onClick={openChatField} className={styles.chatIcon} />
            </div>
        </div>
    )
}