import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext"

import { useState } from "react"

import { ResetPasswordStepOne } from "./stepOne/ResetPasswordStepOne"
import { ResetPasswordStepTwo } from "./stepTwo/ResetPasswordStepTwo"

import background from '../img/background.png'
import styles from './ResetPassword.module.css'

export const ResetPassword = () => {

    return (
        <div>
            <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>

                <div className={styles.innerContiner}>

                    <div className={styles.mainLoginField}>
                        <h1>Reset Password</h1>
                        <div className={styles.innerColumn}>
                            <ResetPasswordStepOne/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}