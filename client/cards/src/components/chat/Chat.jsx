import { useState } from "react";

import { ChatWindow } from "./chatWindow/ChatWindow";

import { PiWechatLogoDuotone } from "react-icons/pi";
import styles from "./Chat.module.css"

export const Chat = () => {

    const [open, setOpen] = useState(0);
    const [openChat, setOpenChat] = useState('')

    const closeChat = () => {
        setOpen(0);
        setOpenChat("");
    }

    const openChatField = () => {
        if(open === 0) {
            setOpen(1);
            setOpenChat(<ChatWindow closeChat={closeChat}/>);
        } else {
            setOpen(0);
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