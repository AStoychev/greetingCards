import styles from './ButtonNext.module.css'

export const ButtonNext = ({
    nextStep,
}) => {
    return (
        <div className={styles.bottomButtons}>
            <div className={styles.nextStep}>
                <button onClick={nextStep} className={styles.nextButton}>Next</button>
            </div>
        </div>
    );
}