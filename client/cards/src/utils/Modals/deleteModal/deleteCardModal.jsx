import styles from "./deleteCardModal.module.css"

export const DeleteCardModal = ({
    onLoadModal
}) => {
    const handleClose = (data) => {
        onLoadModal(data)
    }
    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
                    <h2>Hello</h2>
                    <div className={styles.paragraphCookie}>
                        Are you sure you want to delete this card!
                    </div>
                    <button className={styles.letsGoButton} onClick={() => handleClose('No')}>No</button>
                    <button className={styles.letsGoButton} onClick={() => handleClose('Yes')}>Yes</button>
                </div>
            </div>
        </div>
    );
}
