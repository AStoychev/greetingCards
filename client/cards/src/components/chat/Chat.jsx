import { useState } from "react";

import { ChatWindow } from "./chatWindow/ChatWindow";

import { PiWechatLogoDuotone } from "react-icons/pi";
import styles from "./Chat.module.css"

export const Chat = () => {

    const [open, setOpen] = useState(false);

    const closeChat = () => {
        setOpen(false);
    }

    const openChatField = () => {
        if(!open) {
            setOpen(true);
        } else {
            setOpen(false);
            closeChat();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.chatWrapper}>
                {open && <ChatWindow closeChat={closeChat}/>}
            </div>
            <div className={styles.chatIconWrapper}>
                <PiWechatLogoDuotone onClick={openChatField} className={styles.chatIcon} />
            </div>
        </div>
    )
}