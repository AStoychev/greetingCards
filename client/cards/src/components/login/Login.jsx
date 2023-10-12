import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

import styles from './Login.module.css'

const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

export const Login = () => {
    const { onLoginSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    }, onLoginSubmit);

    return (
        <div className={styles.loginContainer}>
            <div className={styles.innerContiner}>
                <div className={styles.mainLoginField}>
                    <div className={styles.columOne}>
                        <h1>Login</h1>
                        <div className={styles.innerColumOne}>
                            <section id="login-page" className="content auth">
                                <form id="login" method='POST' onSubmit={onSubmit}>
                                    <div className={styles.fieldLogin}>

                                        <label className={styles.htmlContent} htmlFor="email"></label>
                                        <div className={styles.loginInformation}>EMAIL<span>*</span></div>
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="livingwall@gmail.com"
                                            name={LoginFormKeys.Email}
                                            value={values[LoginFormKeys.Email]}
                                            onChange={changeHandler}
                                        // onClick={onClickEmail}
                                        // onBlur={onBlurEmail}
                                        />

                                        <label className={styles.htmlContent} htmlFor="pass"></label>
                                        <div className={styles.loginInformation}>PASSWORD<span>*</span></div>
                                        <input
                                            type="password"
                                            id="login-password"
                                            placeholder="******"
                                            name={LoginFormKeys.Password}
                                            value={values[LoginFormKeys.Password]}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="submit">
                                        <input type="submit" className={styles.submitBtn} value="Log In" />
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>

                    <div className={styles.columTwo}>

                    </div>

                </div>
            </div>
        </div>
    )
}