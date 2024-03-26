import { useContext, useState } from 'react'
import { useForm } from '../../../hooks/useForm'
import { AuthContext } from '../../../contexts/AuthContext'

import { MakeOrderSpinner } from '../../../utils/Spinners/makeOrderSpinner/MakeOrderSpinner'
import { InputsStepOne } from './inputs/InputsStepOne'

import background from '../../img/background.png'
import styles from './ResetPasswordStepOne.module.css'

export const ResetPasswordStepOne = () => {
    const { onResetPasswordSubmitStepOne } = useContext(AuthContext)
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
    }, onResetPasswordSubmitStepOne)


    const [spinner, setSpinner] = useState('');

    const onClickSubmit = (e) => {
        setSpinner(<MakeOrderSpinner />);
        onSubmit(e);
    }

    return (

        <div className={styles.loginContainer} style={{ backgroundImage: `url(${background})` }}>
            {spinner}
            <div className={styles.innerContiner}>

                <div className={styles.mainLoginField}>

                    <h1>Reset Password</h1>
                    
                    <div className={styles.innerColumn}>
                        <section id="login-page" className="content auth">
                            <form id="login" method='POST' onSubmit={onClickSubmit}>
                                <InputsStepOne changeHandler={changeHandler} values={values}/>
                            </form>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    )
}