import { useState } from "react";

import { ChatWindow } from "./chatWindow/ChatWindow";

import { PiWechatLogoDuotone } from "react-icons/pi";
import styles from "./Chat.module.css"

export const Chat = () => {

    const [open, setOpen] = useState(false);
    const [openChat, setOpenChat] = useState('')

    const closeChat = () => {
        setOpen(false);
        setOpenChat("");
    }

    const openChatField = () => {
        if(!open) {
            setOpen(true);
            setOpenChat(<ChatWindow closeChat={closeChat}/>);
        } else {
            setOpen(false);
            closeChat();
        }
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