import { Link } from 'react-router-dom';

import styles from './LoginInputs.module.css';

export const LoginInputs = ({
    changeHandler,
    values,
    LoginFormKeys
}) => {

    const checkForFullValue = () => {
        if (values[LoginFormKeys.Email].length > 0 && values[LoginFormKeys.Password].length > 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.fieldLogin}>
            <label className={styles.htmlContent} htmlFor="email"></label>
            <div className={styles.loginInformation}>EMAIL<span>*</span></div>
            <input
                type="email"
                id="email"
                name="email"
                // name={LoginFormKeys.Email}
                placeholder="greetingcards@gmail.com"
                value={values[LoginFormKeys.Email]}
                onChange={changeHandler}
            />

            <label className={styles.htmlContent} htmlFor="passwords"></label>
            <div className={styles.loginInformation}>PASSWORD<span>*</span></div>
            <input
                type="password"
                id="passwords"
                name="password"
                // name={LoginFormKeys.Password}
                placeholder="******"
                value={values[LoginFormKeys.Password]}
                onChange={changeHandler}
            />

            <div className={styles.forgotPasswordFiled}>
                <Link className={styles.navigationLink} to="/reset-password-step-one">Forgot your password?</Link>
            </div>

            <div className="submit">
                {checkForFullValue()
                    ?
                    <input type="submit" className={styles.submitBtn} value="Log In" />
                    :
                    <input type="submit" className={styles.disabledSubmitBtn} value="Log In" title="Please fill all inputs" />
                }
            </div>
        </div>
    )
}