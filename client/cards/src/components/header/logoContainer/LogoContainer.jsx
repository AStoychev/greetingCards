import { Link } from 'react-router-dom';

import styles from './LogoContainer.module.css';

export const LogoContainer = () => {
    return (
        <div className={styles.logoContainer}>
            <Link className={styles.navigationLinkLogo} to="/">
                <div className={styles.logoContainer}>
                    <div className={styles.logoWrapper}>
                        <img className={styles.logo} src="../../../images/login-menu/invite.png" alt="logo" />
                        <p className={styles.textLogo}>NikoletaArt</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}