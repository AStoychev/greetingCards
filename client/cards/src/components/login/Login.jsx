import { useState, useContext } from "react";

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

    const checkForFullValue = () => {
        if(values[LoginFormKeys.Email].length > 0 && values[LoginFormKeys.Password].length > 0) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>
                    <div className={styles.columnOne}>
                        <h2>Login</h2>
                        <div className={styles.innerColumOne}>
                            <section id="login-page" className="content auth">
                                <form id="login" method='POST' onSubmit={onSubmit}>

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