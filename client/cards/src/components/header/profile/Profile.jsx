import { useState } from 'react';

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from './Profile.module.css'

export const Profile = ({
    onLoadProfileModal,
    data,
}) => {

    const [accordion, setAccordion] = useState(false);
    const [arrow, setArrow] = useState(<FaAngleDown />);

    let [email, userName] = data
    const handleClose = (data) => {
        onLoadProfileModal(data)
    }

    const showChangePasswordMenu = (e) => {
        setAccordion(true)
        setArrow(<FaAngleUp />)
    }

    return (
        <div className={styles.container}>
            <div className={styles.popup}>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
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
                        <div className={styles.changePassword}>
                            <button onClick={showChangePasswordMenu} value={accordion}>Change Password {arrow}</button>

                            {accordion &&
                                <div className={styles.changePasswordMenu}>
                                    <form>
                                        <label className='htmlContent' htmlFor="password"></label>

                                        <div className={styles.registerInformation}>PASSWORD<span>*</span></div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="oldPassword"
                                            placeholder="******"
                                        // value={values.password}
                                        // onChange={changeHandler}
                                        />
                                        <label className='htmlContent' htmlFor="newPassword"></label>

                                        <div className={styles.registerInformation}>NEW PASSWORD<span>*</span></div>
                                        <input
                                            type="password"
                                            name="newPassword"
                                            id="newPassword"
                                            placeholder="******"
                                        // value={values.repeatPassword}
                                        // onChange={changeHandler}
                                        />

                                        <div className={styles.registerInformation}>CONFIRM NEW PASSWORD<span>*</span></div>
                                        <input
                                            type="password"
                                            name="repeatPassword"
                                            id="repeatNewPassword"
                                            placeholder="******"
                                        // value={values.repeatPassword}
                                        // onChange={changeHandler}
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
                        {/* <button className={styles.yesButton} onClick={() => handleClose('Yes')}>Yes</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}