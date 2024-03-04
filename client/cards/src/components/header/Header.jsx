import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { LogoContainer } from './logoContainer/LogoContainer';
import { Navigation } from './navigation/Navigation';
import { Basket } from './basket/Basket';
import { ShowLogoutModal } from '../../utils/Modals/logouthModal/ShowLogoutModal';
import { Profile } from './profile/Profile';
import { MobileNavigation } from './profile/mobileNav/MobileNavigation';

import { FaBars, FaUser } from "react-icons/fa";
import styles from "./Header.module.css"

export const Header = () => {
    const { isAuthenticated, userId, userEmail, userName, isAdmin } = useContext(AuthContext);

    const [logoutModal, setLogoutModal] = useState();
    const [mobileNav, setMobileNav] = useState(false);
    const [colorMobileNav, setColorMobileNav] = useState('white')
    const [dropdownMobileNav, setDropdownMobileNav] = useState();
    const [profileModal, setProfileModal] = useState();

    const navigate = useNavigate();

    const onLoadLogoutModal = (data) => {
        if (data === 'Yes') {
            setLogoutModal('');
            navigate('/logout');
        } else {
            setLogoutModal('')
        }
    }

    const showLogoutModal = () => {
        setLogoutModal(<ShowLogoutModal onLoadLogoutModal={onLoadLogoutModal} />)
        setMobileNav(false)
    }

    const closeMobileNav = () => {
        setMobileNav(false);
        setColorMobileNav('white')
    }

    const clickMObileNavButton = () => {
        setMobileNav(!mobileNav ? true : false)
    }

    const onLoadProfileModal = (data) => {
        if (data === 'Yes') {
            setProfileModal('');
        } else {
            setProfileModal('')
        }
    }

    const showProfileModal = () => {
        setProfileModal(<Profile onLoadProfileModal={onLoadProfileModal} data={[userEmail, userName]} />)
    }

    useEffect(() => {
        if (mobileNav) {
            setColorMobileNav('ae0303')
            setDropdownMobileNav(
                <MobileNavigation isAuthenticated={isAuthenticated} isAdmin={isAdmin} userId={userId} showLogoutModal={showLogoutModal} userName={userName} closeMobileNav={closeMobileNav} />
            )
        } else {
            setColorMobileNav('white')
            setDropdownMobileNav()
        }
    }, [mobileNav])

    return (
        <header>
            <div className={styles.container}>
                {logoutModal}
                {profileModal}

                <LogoContainer />

                <Navigation isAuthenticated={isAuthenticated} isAdmin={isAdmin} userId={userId} showLogoutModal={showLogoutModal}/>

                <div className={styles.authIconWrapper}>
                    {
                        isAuthenticated &&
                        <div className={styles.profileWrapper} onClick={showProfileModal}>
                            <FaUser className={styles.profileIcon} />
                        </div>
                    }

                    <div className={styles.basketWrapper}>
                        <Basket />
                    </div>
                    <div className={styles.mobileNavigation}>
                        <button onClick={clickMObileNavButton}>
                            <FaBars className={styles.mobileIcon} style={{ color: `${colorMobileNav}` }} />
                        </button>
                        {dropdownMobileNav}
                    </div>
                </div>

            </div >

        </header>
    );
}
