import { useState, useContext } from 'react';

import { useForm } from '../../../hooks/useForm';

import { AuthContext } from '../../../contexts/AuthContext';

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from './Profile.module.css'

export const Profile = ({
    onLoadProfileModal,
    data,
}) => {

    let [email, userName] = data;

    const {onChangePasswordSubmit} = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: email,
        password: '',
        newPassword: '',
        repeatNewPassword: '',

    }, onChangePasswordSubmit);

    const [accordion, setAccordion] = useState(false);
    const [arrow, setArrow] = useState(<FaAngleDown />);

    const handleClose = (data) => {
        onLoadProfileModal(data)
    }

    const showChangePasswordMenu = (data) => {
        if (data === false) {
            setAccordion(true)
            setArrow(<FaAngleUp />)
        } else {
            setAccordion(false)
            setArrow(<FaAngleDown />)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        <h2>Hello {userName}!</h2>
                    </div>

                    <div className={styles.infoWrapper}>
                        <div className={styles.profileImage}>
                            <img src='../../../images/user/myImage.jpg' alt='profi-image' />
                        </div>
                        <div className={styles.personalData}>

                            <div className={styles.profileInfo}>
                                <p>First Name: {userName}</p>
                            </div>
                            <div className={styles.profileInfo}>
                                <p>Last Name: {userName}</p>
                            </div>
                            <div className={styles.profileInfo}>
                                <p>email: {email}</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className={styles.changePasswordWrapper}>

                        <div className={styles.buttonWrapper}>
                            <button onClick={() => showChangePasswordMenu(accordion)}>Change Password {arrow}</button>
                        </div>

                        <div className={styles.changePassword}>
                            {accordion &&
                                <div className={styles.changePasswordMenu}>
                                    <form id="changePasword" method='POST' onSubmit={onSubmit}>
                                        
                                        <label className='htmlContent' htmlFor="oldPassword">PASSWORD<span>*</span></label>
                                        {/* <div className={styles.registerInformation}>PASSWORD<span>*</span></div> */}
                                        <input
                                            type="password"
                                            name="password"
                                            id="oldPassword"
                                            value={values.password}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
                                        <label className='htmlContent' htmlFor="newPassword">NEW PASSWORD<span>*</span></label>
                                        {/* <div className={styles.registerInformation}>NEW PASSWORD<span>*</span></div> */}
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="newPassword"
                                            value={values.newPassword}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
                                        <label className='htmlContent' htmlFor="repeatNewPassword">CONFIRM NEW PASSWORD<span>*</span></label>
                                        {/* <div className={styles.registerInformation}>CONFIRM NEW PASSWORD<span>*</span></div> */}
                                        <input
                                            type="password"
                                            name="repeatNewPassword"
                                            id="repeatNewPassword"
                                            value={values.repeatNewPassword}
                                            onChange={changeHandler}
                                            placeholder="******"
                                        />
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
                    </div>

                    <div className={styles.buttonWrapper}>
                        <button className={styles.noButton} onClick={() => handleClose('No')}>Close</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}