import styles from './MakeOrderSpinner.module.css'

export const MakeOrderSpinner = () => {
    return (
        <div className={styles.container} data-testid="spinner-container">
            <div className={styles.spinner}>
                <div className={styles.innerContainer} data-testid="inner-container">
                    <div className={styles.ldsEllipsis} data-testid="lds-ellipsis">
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
