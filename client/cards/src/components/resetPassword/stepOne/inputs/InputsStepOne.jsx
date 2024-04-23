import styles from './InputsStepOne.module.css';

export const InputsStepOne = ({
    changeHandler,
    values,
}) => {

    const checkForEmptyValues = () => {
        if (values.email === '') {
            return false
        } else {
            return true
        }
    }

    return (
        <div className={styles.fieldStepOne}>
            <label className={styles.htmlContent} htmlFor="email"></label>
            <div className={styles.loginInformation}>EMAIL<span>*</span></div>
            <input
                type="email"
                id="email"
                placeholder="greetingcards@gmail.com"
                name="email"
                value={values.email}
                onChange={changeHandler}
            />
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
                        title='Please write your email address!'
                        value="SUBMIT" />
                </div>
            }
        </div>
    )
}