import { useContext } from 'react';

import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import styles from './Pattern.module.css'

export const Pattern = ({
    pageWithOrder
}) => {

    const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);
    return (
        <div className={styles.container}>
            <div className={styles.middleColumnTopBaR}></div>
            <div className={styles.mainField}>

                <div className={styles.leftColumn}>
                    <div className={styles.lineUpOrder}>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/${userId}`}>Main</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/all-order/${userId}`}>All Orders</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/unprocessed-order/${userId}`}>Unprocessed</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/send-order/${userId}`}>Sent</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/received-order/${userId}`}>Received</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/returned-order/${userId}`}>Returned</Link>
                        </div>
                        <div>
                            <Link className={styles.linkTo} to={`/admin-main-page/refused-order/${userId}`}>Refused</Link>
                        </div>

                    </div>
                </div>

                <div className={styles.middleColumn}>
                    {pageWithOrder}
                </div>

            </div>
        </div>
    );
}
