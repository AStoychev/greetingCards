import { useContext } from "react";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

import background from '../img/background.png'
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
        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <div className={styles.columnOne}>
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
                                            placeholder="greetingcards@gmail.com"
                                            name={LoginFormKeys.Email}
                                            value={values[LoginFormKeys.Email]}
                                            onChange={changeHandler}
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

                                        <div className={styles.forgotPasswordFiled}>Forgot your password?</div>
                                        <div className="submit">
                                            <input type="submit" className={styles.submitBtn} value="Log In" />
                                        </div>
                                    </div>
                                </form>
                            </section>
                            <div className={styles.goToRegister}>
                                Need an account?
                                <Link className={styles.navigationLink} to="/register">Register</Link>
                            </div>
                        </div>
                    </div>

                    <div className={styles.columnTwo}>
                        <div className={styles.innerLogo}>
                            <img src="../../../images/login-menu/image3.png" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}