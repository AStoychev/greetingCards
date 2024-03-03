import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { LogoContainer } from './logoContainer/LogoContainer';
import { Basket } from './basket/Basket';
import { ShowLogoutModal } from '../../utils/Modals/logouthModal/ShowLogoutModal';
import { Profile } from './profile/Profile';
import { MobileNavigation } from './profile/mobileNav/MobileNavigation';

import { addToOrder } from '../../functions/addToOrder';

// import { MyFavorite } from '../../utils/MyFavorites/MyFavorites';

// import Cookies from 'universal-cookie';

// import { AiFillHeart } from 'react-icons/ai'
import { FaBars, FaUser } from "react-icons/fa";
// import { FaUser } from "react-icons/fa";
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

    // if (isAuthenticated) {
    //     console.log(userEmail, userId, userName)
    // }
    // Show first modal
    // Safe cookies for ten minutes
    // const cookies = new Cookies(null, { path: '/', expires: new Date(Date.now()+600000)});
    // Safe cookies for current session storage
    // const cookies = new Cookies(null, { path: '/' });
    // const onLoadModal = (data) => {
    //     if (data === "Close") {
    //         cookies.set('popup', 'Hello');
    //         setPopup();
    //     }
    // };

    // const [popup, setPopup] = useState()
    // const lookForCookies = () => {
    //     if (!cookies.get('popup')) {
    //         setPopup(<OnLoad onLoadModal={onLoadModal} />)
    //     }
    // }

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
                {/* <div className={styles.flexContainer} onLoad={lookForCookies}> */}
                {/* {popup} */}
                {logoutModal}
                {profileModal}

                <LogoContainer />

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

                <div className={styles.basket}>
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
