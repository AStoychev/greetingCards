import { Link, useNavigate } from 'react-router-dom';

import { SaveLastFiveVisitedCards } from '../SaveInLocalStorage/SaveLastFiveVisitedCards';
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

            <div className={styles.articleBanner}>
                <section className={styles.firstSection}>
                    <div className={styles.bannerContainerOne}>
                        <div className={styles.bannerContent}>
                            <h1>Imagine a place...</h1>
                            <p>...where you can wish a loved one everything you feel for them</p>
                            <div className={styles}>
                                <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
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

                        <div className={styles.bannerImage}>
                            <img className={styles.animatedBox} src='../../../images/home-page/animatetBox.gif' alt='animatedBox' />
                        </div>

                        <div className={styles.bannerContent}>
                            <h1>Imagine a box...</h1>
                            <p>...full of beautiful wishes</p>
                            <div className={styles}>
                                <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
                                <button className={styles.aboutButton}>ABOUT</button>
                            </div>
                        </div>

                    </div>
                </section>
            </div>

            <div className={styles.articleBanner}>
                <section className={styles.firstSection}>
                    <div className={styles.bannerContainerOne}>
                        <div className={styles.bannerContent}>
                            <h1>Imagine a place...</h1>
                            <p>...where you can wish a loved one everything you feel for them</p>
                            <div className={styles}>
                                <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
                                <button className={styles.aboutButton}>ABOUT</button>
                            </div>
                        </div>
                        <div className={styles.bannerImage}>
                            <img className={styles.imageOne} src='../../../images/home-page/image2.png' alt='greetingCartOne' />
                        </div>
                    </div>
                </section>
            </div>

            <Partners />

            < SaveLastFiveVisitedCards />
        </div>
    )
}