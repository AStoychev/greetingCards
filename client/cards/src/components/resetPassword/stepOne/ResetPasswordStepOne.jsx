import { useContext } from 'react'
import { useForm } from '../../../hooks/useForm'
import { AuthContext } from '../../../contexts/AuthContext'

import background from '../../img/background.png'
import styles from './ResetPasswordStepOne.module.css'

export const ResetPasswordStepOne = () => {
    const { onResetPasswordSubmitStepOne } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
    }, onResetPasswordSubmitStepOne)

    return (

        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <h1>Reset Password</h1>
                    <div className={styles.innerColumn}>
                        <section id="login-page" className="content auth">
                            <form id="login" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldLogin}>

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
                                    <div className="submit">
                                        <input type="submit" className={styles.submitBtn} value="Next" />
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