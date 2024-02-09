import styles from "./DeleteCardModal.module.css"

export const DeleteCardModal = ({
    title,
    onLoadModal
}) => {
    const handleClose = (data) => {
        onLoadModal(data)
    }
    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    <h2>Delete {title}</h2>
                    <div className={styles.paragraphCookie}>
                        Are you sure you want to delete this card!
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.letsGoButton} onClick={() => handleClose('No')}>No</button>
                        <button className={styles.letsGoButton} onClick={() => handleClose('Yes')}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
