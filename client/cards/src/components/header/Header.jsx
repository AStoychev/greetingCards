import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';

import { Basket } from './basket/Basket';

import { addToOrder } from '../../functions/addToOrder';

// import { OnLoad } from '../../utils/onLoad/onLoad';
// import { MyFavorite } from '../../utils/MyFavorites/MyFavorites';

// import Cookies from 'universal-cookie';

// import { AiFillHeart } from 'react-icons/ai'
import styles from "./Header.module.css"

export const Header = () => {
    const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);

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
        <>
            <div className={styles.flexContainer}>
                {/* <div className={styles.flexContainer} onLoad={lookForCookies}> */}
                {/* {popup} */}
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
                                <Link className={styles.navigationLink} to="/logout">Logout</Link>
                                <div className={styles.userName}>{userName}</div>
                            </>
                        }
                    </div>
                </div>
                <div className={styles.navigation}>
                    <Link className={styles.navigationLinkLogo} to="/">
                        <div className={styles.container}>
                            {/* <h1>Greeting</h1>
                            <h2>Cards</h2> */}
                            <div>
                                <img className={styles.logo} src="images/logo.png" alt="logo" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.navigation}>
                    <Basket />
                    {/* <div className={styles.mainRight}>
                        <div className={styles.basketMain}>
                            <div className={styles.innerBascketOne}>
                                <img className={styles.bascketLogo} src="images/purchase.png" alt="purchase" />
                            </div>
                            <div className={styles.innerBascketTwo}>
                                {price}
                            </div>
                        </div>
                    </div> */}
                </div>
            </div >
        </>
    );
}
