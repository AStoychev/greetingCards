import { useContext, useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { Logout } from '../logout/Logout';
import { Basket } from './basket/Basket';
import { ShowLogoutModal } from '../../utils/Modals/logouthModal/ShowLogoutModal';

import { addToOrder } from '../../functions/addToOrder';

// import { OnLoad } from '../../utils/onLoad/onLoad';
// import { MyFavorite } from '../../utils/MyFavorites/MyFavorites';

// import Cookies from 'universal-cookie';

// import { AiFillHeart } from 'react-icons/ai'
import styles from "./Header.module.css"

export const Header = () => {
    const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);

    const [logoutModal, setLogoutModal] = useState();

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

    return (
        <header>
            <div className={styles.container}>
                {/* <div className={styles.flexContainer} onLoad={lookForCookies}> */}
                {/* {popup} */}
                {logoutModal}

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

                <div className={styles.navigation}>
                    <div className={styles.navigationChild}>
                        <Link className={styles.navigationLink} to="/">Home</Link>
                        <Link className={styles.navigationLink} to="/catalog">Catalog</Link>
                        {!isAuthenticated &&
                            <>
                                <Link className={styles.navigationLink} to="/login">Login</Link>
                                <Link className={styles.navigationLink} to="/register">Register</Link>
                            </>
                        }

                        {isAuthenticated &&
                            <>
                                <Link className={styles.navigationLink} to="/add-card">Add Card</Link>
                                <Link className={styles.navigationLink} to={`/admin-main-page/${userId}`}>Admin</Link>
                                <button className={styles.navigationLinkButton} onClick={showLogoutModal}>Logout</button>
                                {/* <Link className={styles.navigationLink} onClick={showLogoutModal} to="/logout">Logout</Link> */}
                                <div className={styles.userName}>{userName}</div>
                            </>
                        }
                    </div>
                </div>

                <div className={styles.basket}>
                    <Basket />
                </div>
            </div >

        </header>
    );
}
