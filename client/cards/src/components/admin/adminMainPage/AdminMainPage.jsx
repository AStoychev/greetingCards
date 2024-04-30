import { useState, useEffect, useContext } from 'react';

import { AuthContext } from '../../../contexts/AuthContext';
import { Pattern } from '../pattern/Pattern';

import styles from './AdminMainPage.module.css'

export const AdminMainPage = () => {
    const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);

    return (
        <Pattern pageWithOrder={<div className={styles.greetingField}>Hello Admin</div>}
        />
    );
}