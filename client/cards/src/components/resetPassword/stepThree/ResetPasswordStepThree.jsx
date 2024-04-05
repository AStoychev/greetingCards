import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { AuthContext } from '../../../contexts/AuthContext';

import { NewPasswordInputs } from './newPasswordInputs/NewPasswordInputs';

import background from '../../img/background.png';
import styles from './ResetPasswordStepThree.module.css';

export const ResetPasswordStepThree = () => {

    const userEmail = useParams();

    const { errorResetPassword, onResetPasswordSubmitStepThree } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: userEmail['cryptEmail'],
        newPassword: '',
        confirmNewPassword: '',
    }, onResetPasswordSubmitStepThree)

    const checkForEmptyValues = () => {
        if (values.newPassword === '' || values.confirmNewPassword === '') {
            return false
        } else {
            return true
        }
    }

    return (

        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <h1>Create New Password</h1>
                    <div className={styles.innerColumn}>
                        <section id="login-page" className="content auth">
                            <form id="login" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldLogin}>

                                    <NewPasswordInputs values={values} changeHandler={changeHandler}/>

                                    {errorResetPassword.error &&
                                        <p className={styles.errorField}>{errorResetPassword.error}</p>
                                    }

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
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}