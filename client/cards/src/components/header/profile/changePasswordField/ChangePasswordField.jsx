import { useState } from 'react';

import styles from './ChangePasswordField.module.css';

export const ChangePasswordField = ({
    onSubmit,
    changeHandler,
    values,
    accordion
}) => {

    const [validateFields, setValidateFields] = useState({
        password: [false, 'none'],
        newPassword: [false, "none"],
        repeatNewPassword: [false, 'none']
    })

    const onChangeHandler = (e) => {
        changeHandler(e);
        let word = e.target.name;
        let value = e.target.value;
        validate(word, value)
    }

    const onHandleClick = (e) => {
        let word = e.target.name;
        if (!validateFields[word][0]) {
            setValidateFields(prev => ({ ...prev, [word]: [false, '1.5px solid #de1a1a'] }))
        };
    };

    const onHandleBlur = (e) => {
        let word = e.target.name;
        if (validateFields[word][0]) {
            setValidateFields(prev => ({ ...prev, [word]: [true, 'none'] }))
        }
    }

    const validate = (word, value) => {
        if (value.length <= 0) {
            setValidateFields(prev => ({ ...prev, [word]: [false, '1.5px solid #de1a1a'] }))
        } else {
            setValidateFields(prev => ({ ...prev, [word]: [true, '1.5px solid #0037ff'] }))
        }
    }

    return (
        <div className={styles.changePassword}>
            {accordion &&
                <div className={styles.changePasswordMenu}>
                    <form id="changePasword" method='POST' onSubmit={onSubmit}>
                        <div>
                            <label className='htmlContent' htmlFor="oldPassword">PASSWORD<span>*</span></label>
                            <input
                                type="password"
                                name="password"
                                id="oldPassword"
                                style={{ outline: validateFields.password[1] }}
                                placeholder="******"
                                value={values.password}
                                onChange={onChangeHandler}
                                onClick={onHandleClick}
                                onBlur={onHandleBlur}
                            />
                        </div>
                        <div>
                            <label className='htmlContent' htmlFor="newPassword">NEW PASSWORD<span>*</span></label>
                            <input
                                type="password"
                                name="newPassword"
                                id="newPassword"
                                style={{ outline: validateFields.newPassword[1] }}
                                placeholder="******"
                                value={values.newPassword}
                                onChange={onChangeHandler}
                                onClick={onHandleClick}
                                onBlur={onHandleBlur}
                            />
                        </div>
                        <div>
                            <label className='htmlContent' htmlFor="repeatNewPassword">CONFIRM NEW PASSWORD<span>*</span></label>
                            <input
                                type="password"
                                name="repeatNewPassword"
                                id="repeatNewPassword"
                                style={{ outline: validateFields.repeatNewPassword[1] }}
                                placeholder="******"
                                value={values.repeatNewPassword}
                                onChange={onChangeHandler}
                                onClick={onHandleClick}
                                onBlur={onHandleBlur}
                            />
                        </div>
                        <div className={styles.submit}>
                            <input
                                type="submit"
                                className={styles.submitBtn}
                                value="CHANGE"
                            />
                        </div>
                    </form>
                </div>
            }
        </div>

    )
}