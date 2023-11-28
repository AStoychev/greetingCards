import { useForm } from "../../../hooks/useForm";

import { IoSend } from "react-icons/io5";
import styles from "./ChatWindow.module.css"

export const ChatWindow = ({
    closeChat,
}) => {

    // const {values, changeHandler, onSubmit} = useForm({
    //     message: ''
    // })

    // const changeMessageHandler = (e) => {
    //     e.preventDefault()
    //     console.log(e.target.value)
    // }

    const onClickClose = () => {
        closeChat()
    }

    return (
        <div className={styles.chatFieldContainer}>
            <div className={styles.closeButton} onClick={onClickClose}>X</div>
            <div className={styles.chatMenuWrapper}>
                <h3>Hi there!</h3>
            </div>
            <div className={styles.messageContent}>
                Message
            </div>

            <div className={styles.inputWrapper}>
                <form>
                    <label htmlFor="message"></label>
                    <input
                        type="text"
                        placeholder="Enter Your Message..."
                        name="text"
                        value="text"
                        // onChange={changeHandler}
                    />

                    <div className={styles.submitWrapper}>
                        <IoSend className={styles.submitIcon}/>
                    </div>
                </form>
            </div>
        </div>
    )
}