import styles from './SubmitInputs.module.css';

export const SubmitInputs = ({
    values
}) => {

    const checkForEmptyValues = () => {
        if (values.newPassword === '' || values.confirmNewPassword === '') {
            return false
        } else {
            return true
        }
    }

    return (
        <div>
            {checkForEmptyValues() &&
                <div className="submit">
                    <input type="submit" className={styles.submitBtn} value="SUBMIT" />
                </div>
                ||
                <div className="submit">
                    <input
                        type="submit"
                        className={styles.disabledSubmitBtn}
                        disabled={true}
                        title='Please Fill All Fields'
                        value="SUBMIT" />
                </div>
            }
        </div>
    )
}