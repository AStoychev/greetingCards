import styles from './ShowLogoutModal.module.css'

export const ShowLogoutModal = ({
    onLoadLogoutModal
}) => {

    const handleClose = (data) => {
        onLoadLogoutModal(data)
    }
    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    <div className={styles.titleWrapper}>
                        {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
                        <h2>Are you sure you want to logout?</h2>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.noButton} onClick={() => handleClose('No')}>No</button>
                        <button className={styles.yesButton} onClick={() => handleClose('Yes')}>Yes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}