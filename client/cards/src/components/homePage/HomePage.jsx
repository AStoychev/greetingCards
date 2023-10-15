import { Link, useNavigate } from 'react-router-dom';

import { SaveLastFiveVisitedCards } from '../saveInLocalStorage/SaveLastFiveVisitedCards';
import { Partners } from '../../utils/Partners/Partners';

import styles from './HomePage.module.css';

export const HomePage = () => {
    const navigate = useNavigate();

    const goToShop = () => {
        navigate(`/catalog`)
    }

    const stateObj = {
        foo: "catalog",
    };

    return (
        <div className={styles.container}>
            {/* <h1>Hello in Greeting Cards</h1> */}
            <div >
                {/* <Link className='navigationLink' to="/">Home</Link>
                <Link className='navigationLink' to="/login">Login</Link>
                <Link className='navigationLink' to="/register">Register</Link>
                <Link className='navigationLink' to="/logout">Logout</Link> */}
            </div >

            <div className={styles.articleBanner}>
                <section className={styles.firstSection}>
                    <div className={styles.bannerContainerOne}>
                        <div className={styles.bannerContent}>
                            <h1>Imagine a place...</h1>
                            <p>...where you can wish a loved one everything you feel for them</p>
                            <div className={styles}>
                                {/* <button className={styles.shopNowButton}>SHOP NOW</button> */}
                                <button className={styles.aboutButton}>ABOUT</button>
                            </div>
                        </div>
                        <div className={styles.bannerImage}>
                            <img className={styles.imageOne} src='../../../images/home-page/image1.png' alt='greetingCartOne' />
                        </div>
                    </div>
                </section>
            </div>

            <div className={styles.articleBanner}>
                <section className={styles.secondSection}>
                    <div className={styles.bannerContainer}>
                        <div className={styles.bannerContent}>
                            <h1>Imagine a box...</h1>
                            <p>...full of beautiful wishes</p>
                            <div className={styles}>
                                <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
                                <button className={styles.aboutButton}>ABOUT</button>
                            </div>
                        </div>
                        <div className={styles.bannerImage}>
                            <img className={styles.animatedBox} src='../../../images/home-page/animatetBox.gif' alt='animatedBox' />
                        </div>
                    </div>
                </section>
            </div>

            {/* <div className={styles.firstAddBanner}>
                <div className={styles.firstAddBannerImageDiv}>
                    <img className={styles.firstAddBannerImage} src='../images/halloween1.jpg' alt='fisrtAddBaner' />
                    <div className={styles.imageInnerDiv}>
                        <p>Scary & Funny</p>
                        <div className={styles.textImageBackGround}>
                            Darkness falls across the land.
                        </div>
                        <br></br>
                        <div className={styles.textImageBackGround}>The midnight hour is close at hand.</div>
                    </div>
                    <div className={styles.buttonInnerDiv}>
                        <button onClick={goToShop}>SHOP NOW</button>
                    </div>
                </div>
            </div> */}

            <Partners />

            < SaveLastFiveVisitedCards />
        </div>
    )
}