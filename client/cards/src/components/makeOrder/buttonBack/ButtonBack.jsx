import styles from './ButtonBack.module.css'

export const ButtonBack = ({
    backStep,
    page,
}) => {
    return (
        <div className={styles.bottomButtons}>
            <div className={styles.nextStep}>
                <button onClick={backStep} className={styles.backButton}>{page}</button>
            </div>
        </div>
    );
}