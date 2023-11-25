import styles from './MakeOrderSpinner.module.css'

export const MakeOrderSpinner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.spinner}>
                <div className={styles.innerContainer}>
                    <div className={styles.ldsEllipsis}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
