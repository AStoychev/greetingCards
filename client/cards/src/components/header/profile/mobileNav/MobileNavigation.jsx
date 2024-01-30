import { Link } from 'react-router-dom'

import styles from './MobileNavigation.module.css'

export const MobileNavigation = ({
    isAuthenticated,
    isAdmin,
    userId,
    showLogoutModal,
    userName,
    closeMobileNav,
}) => {
    return (
        <div className={styles.containerMobileNav}>
            <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to="/">Home</Link>
            <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to="/catalog">Catalog</Link>
            {!isAuthenticated &&
                <>
                    <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to="/login">Login</Link>
                    <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to="/register">Register</Link>
                </>
            }

            {isAuthenticated &&
                <>
                    {isAdmin &&
                        <>
                            <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to="/add-card">Add Card</Link>
                            <Link className={styles.mobileNavigationLink} onClick={closeMobileNav} to={`/admin-main-page/${userId}`}>Admin</Link>
                        </>
                    }
                    <button className={styles.mobileNavigationLinkButton} onClick={showLogoutModal}>Logout</button>
                    {/* <Link className={styles.navigationLink} onClick={showLogoutModal} to="/logout">Logout</Link> */}
                    <div className={styles.mobileUserName}>{userName}</div>
                </>
            }
            <div className={styles.closeMobileNavBottom} onClick={closeMobileNav}>...</div>
        </div>
    )
}