import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useAuthContext } from "../../contexts/AuthContext";

import { LoginInputs } from "./LoginInputs/LoginInputs";

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
                        <h2>Login</h2>
                        <div className={styles.innerColumOne}>
                            <section id="login-page" className="content auth">
                                <form id="login" method='POST' onSubmit={onSubmit}>
                                    <LoginInputs changeHandler={changeHandler} values={values} LoginFormKeys={LoginFormKeys}/>
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