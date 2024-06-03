import styles from './AdminOrderMessage.module.css';

export const AdminOrderMessage = ({ client, message, messageModalHandle }) => {
    return (
        <div className={styles.adminOrderModal}>
            <div className={styles.modalWrapper}>
                <div className={styles.messageWrapper}>
                    <p>Client: {client}</p>
                    <p>{message}</p>
                </div>
                <button onClick={messageModalHandle}>
                    Close
                </button>
            </div>
        </div>
    )
}