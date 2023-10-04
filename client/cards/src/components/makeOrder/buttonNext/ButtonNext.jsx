import styles from './ButtonNext.module.css'

export const ButtonNext = ({
    nextStep,
    page,
}) => {

    return (
        <div className={styles.bottomButtons}>
            <div className={styles.nextStep}>
                <button onClick={nextStep} className={styles.nextButton} >{page}</button>
            </div>
        </div>
    );
}