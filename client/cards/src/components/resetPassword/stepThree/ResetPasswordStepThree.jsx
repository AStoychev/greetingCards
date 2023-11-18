import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { AuthContext } from '../../../contexts/AuthContext';

import background from '../../img/background.png';
import styles from './ResetPasswordStepThree.module.css';

export const ResetPasswordStepThree = () => {

    const userEmail = useParams();

    const { onResetPasswordSubmitStepThree } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: userEmail['cryptEmail'],
        newPassword: '',
        confirmNewPassword: '',
    }, onResetPasswordSubmitStepThree)

    return (

        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <h1>Create New Password</h1>
                    <div className={styles.innerColumn}>
                        <section id="login-page" className="content auth">
                            <form id="login" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldLogin}>

                                    <label className={styles.htmlContent} htmlFor="newPassword"></label>
                                    <div className={styles.loginInformation}>NEW PASSWORD<span>*</span></div>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        placeholder="******"
                                        name="newPassword"
                                        value={values.newPassword}
                                        onChange={changeHandler}
                                    />

                                    <label className={styles.htmlContent} htmlFor="confirmNewPassword"></label>

                                    <div className={styles.loginInformation}>CONFIRM NEW PASSWORD<span>*</span></div>
                                    <input
                                        type="password"
                                        id="confirmNewPassword"
                                        placeholder="******"
                                        name="confirmNewPassword"
                                        value={values.confirmNewPassword}
                                        onChange={changeHandler}
                                    />

                                    <div className="submit">
                                        <input type="submit" className={styles.submitBtn} value="SUBMIT" />
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}