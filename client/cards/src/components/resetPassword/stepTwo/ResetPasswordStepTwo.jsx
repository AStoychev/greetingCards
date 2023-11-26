import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { useForm } from '../../../hooks/useForm';
import { AuthContext, useAuthContext } from '../../../contexts/AuthContext';

import background from '../../img/background.png';
import styles from './ResetPasswordStepTwo.module.css';

export const ResetPasswordStepTwo = () => {

    const userEmail = useParams();

    // Use errorResetPassword.error because in AuthContext data is object with key error
    const { errorResetPassword, onResetPasswordSubmitStepTwo } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        code: '',
        cryptEmail: userEmail['cryptEmail'],
    }, onResetPasswordSubmitStepTwo)

    const checkForEmptyValues = () => {
        if (values.code === '') {
            return false
        } else {
            return true
        }
    }

    return (
        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <div className={styles.innerColumn}>
                        <section id="login-page" className="content auth">
                            <form id="login" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldLogin}>

                                    <h2>
                                        Enter Code From Your Email:
                                    </h2>

                                    <label className={styles.htmlContent} htmlFor="email"></label>
                                    <div className={styles.loginInformation}>CODE<span>*</span></div>
                                    <input
                                        type="text"
                                        id="email"
                                        name="code"
                                        value={values.code}
                                        onChange={changeHandler}
                                    />

                                    {errorResetPassword.error &&
                                        <p className={styles.errorField}>{errorResetPassword.error}</p>
                                    }

                                    {checkForEmptyValues() &&
                                        <div className="submit">
                                            <input type="submit" className={styles.submitBtn} value="Submit" />
                                        </div>
                                        ||
                                        <div className="submit">
                                            <input
                                                type="submit"
                                                className={styles.disabledSubmitBtn}
                                                disabled={true}
                                                title='Write You Code'
                                                value="Submit" />
                                        </div>
                                    }
                                </div>
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}