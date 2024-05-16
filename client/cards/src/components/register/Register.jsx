import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import background from '../img/background.png'
import styles from './Register.module.css'

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',

    }, onRegisterSubmit);

    const [checkbox, setCheckbox] = useState('');
    const navigate = useNavigate();

    const onCheckPrivacyPolicy = () => {
        if (checkbox === '') {
            setCheckbox('check')
        }
        else if (checkbox === 'check') (
            setCheckbox('')
        )
    }

    const goToLogin = () => {
        navigate('/login')
    }

    let validateEmailAddress = (email) => {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email)
    };

    const validateRegisterForm = () => {
        if (
            validateEmailAddress(values.email)
            &&
            values.username.length >= 5
            &&
            values.password.length >= 5
            &&
            values.repeatPassword.length >= 5
            &&
            checkbox === 'check'
        ) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.innerContainer}>
                <div className={styles.mainField}>
                    <h2>Create an account</h2>
                    <div className={styles.innerColumn}>
                        <section id="register-page" className="content auth">
                            <form id="register" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldRegister}>

                                    <label className='htmlContent' htmlFor="email"></label>
                                    <div className={styles.registerInformation}>EMAIL<span>*</span></div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="greetingcards@gmail.com"
                                        value={values.email}
                                        onChange={changeHandler}
                                    />

                                    <label className='htmlContent' htmlFor="username"></label>
                                    <div className={styles.registerInformation}>USERNAME<span>*</span></div>
                                    <input
                                        type="username"
                                        id="username"
                                        name="username"
                                        placeholder="Username"
                                        value={values.username}
                                        onChange={changeHandler}
                                    />
                                    <label className='htmlContent' htmlFor="password"></label>
                                    <div className={styles.registerInformation}>PASSWORD<span>*</span></div>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="******"
                                        value={values.password}
                                        onChange={changeHandler}
                                    />
                                    <label className='htmlContent' htmlFor="repeatPassword"></label>
                                    <div className={styles.registerInformation}>CONFIRM PASSWORD<span>*</span></div>
                                    <input
                                        type="password"
                                        name="repeatPassword"
                                        id="repeatPassword"
                                        placeholder="******"
                                        value={values.repeatPassword}
                                        onChange={changeHandler}
                                    />

                                    <div className={styles.privaciPolicy}>

                                        <div className={styles.checkbox} onClick={onCheckPrivacyPolicy}>
                                            {
                                                checkbox
                                                    ?
                                                    <img className={styles.tick} src="images/payment-icons/check.png" alt="checkmark" />
                                                    :
                                                    ''
                                            }
                                        </div>

                                        <div className={styles.textPolicy}>
                                            <p>I have read and agree to Greeting Cards Ters of Service and Privacy Policy.
                                                <span>*</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="submit">
                                        {validateRegisterForm()
                                            ?
                                            <input
                                                type="submit"
                                                className={styles.submitBtn}
                                                value="Continue"
                                            />
                                            :
                                            <input
                                                type="submit"
                                                className={styles.disabledSubmitBtn}
                                                disabled={true}
                                                title='You must fill all fields and agree to our Terms of Service to continue'
                                                value="Continue"
                                            />
                                        }
                                    </div>
                                </div>

                            </form>
                        </section>
                        <div className={styles.navigationLinkRegister}>
                            <Link className={styles.navigationLink} to="/login">Already have an account?</Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}