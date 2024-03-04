import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';

export const Navigation = ({
    isAuthenticated,
    isAdmin,
    userId,
    showLogoutModal,
}) => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigationChild}>
                <Link className={styles.navigationLink} to="/">Home</Link>
                <Link className={styles.navigationLink} to="/catalog">Catalog</Link>
                {
                    !isAuthenticated &&
                    <>
                        <Link className={styles.navigationLink} to="/login">Login</Link>
                        <Link className={styles.navigationLink} to="/register">Register</Link>
                    </>
                }

                {
                    isAuthenticated &&
                    <>
                        {isAdmin &&
                            <>
                                <Link className={styles.navigationLink} to="/add-card">Add Card</Link>
                                <Link className={styles.navigationLink} to={`/admin-main-page/${userId}`}>Admin</Link>
                            </>
                        }
                        <button className={styles.navigationLinkButton} onClick={showLogoutModal}>Logout</button>
                        {/* <Link className={styles.navigationLink} onClick={showLogoutModal} to="/logout">Logout</Link> */}
                        {/* <div className={styles.userName}>{userName}</div> */}
                    </>
                }
            </div>
        </div>
    )
}