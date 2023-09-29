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
        <div>
            {/* <h1>Hello in Greeting Cards</h1> */}
            <div >
                {/* <Link className='navigationLink' to="/">Home</Link>
                <Link className='navigationLink' to="/login">Login</Link>
                <Link className='navigationLink' to="/register">Register</Link>
                <Link className='navigationLink' to="/logout">Logout</Link> */}
            </div >
            <div className={styles.firstAddBanner}>
                <div className={styles.firstAddBannerImageDiv}>
                    <img className={styles.firstAddBannerImage} src='../images/halloween1.jpg' alt='fisrtAddBaner' />
                    <div className={styles.imageInnerDiv}>
                        <p>Scary & Funny</p>
                        <span>
                            Darkness falls across the land.
                        </span>
                        <br></br>
                        <span>The midnight hour is close at hand.</span>
                    </div>
                    <div className={styles.buttonInnerDiv}>
                        <button onClick={goToShop}>SHOP NOW</button>
                    </div>
                </div>
            </div>

            <Partners />

            < SaveLastFiveVisitedCards />
        </div>
    )
}