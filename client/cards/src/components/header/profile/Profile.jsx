import { useState, useContext } from 'react';

import { useForm } from '../../../hooks/useForm';

import { AuthContext } from '../../../contexts/AuthContext';

import { ProfileInfo } from './profileInfo/ProfileInfo';
import { ChangePasswordButton } from './changePasswordButton/ChangePasswordButton';
import { ChangePasswordField } from './changePasswordField/ChangePasswordField';

import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import styles from './Profile.module.css'

export const Profile = ({
    onLoadProfileModal,
    data,
}) => {

    let [email, userName] = data;

    const { onChangePasswordSubmit } = useContext(AuthContext);
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
                <div className={styles.closeButton}>
                    <button onClick={() => handleClose('No')}>X</button>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.titleWrapper}>
                        <h2>Hello {userName}!</h2>
                    </div>
                    <ProfileInfo userName={userName} email={email} />
                    <div className={styles.changePasswordWrapper}>
                        <ChangePasswordButton showChangePasswordMenu={showChangePasswordMenu} accordion={accordion} arrow={arrow}/>
                        <ChangePasswordField onSubmit={onSubmit} changeHandler={changeHandler} values={values} accordion={accordion}/>
                    </div>
                    <div className={styles.buttonWrapper}>
                        <button className={styles.noButton} onClick={() => handleClose('No')}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}