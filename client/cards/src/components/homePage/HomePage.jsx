import { useNavigate } from 'react-router-dom';

import { FirstSectionBanner } from './FirstSectionBanner/FirstSectionBanner';
import { SecondSectionBanner } from './SecondSectionBanner/SecondSectionBanner';
import { SaveLastFiveVisitedCards } from '../SaveInLocalStorage/SaveLastFiveVisitedCards';
import { Partners } from '../../utils/Partners/Partners';

import styles from './HomePage.module.css';

const LINK_FOR_FIRST_IMAGE = '../../../images/home-page/image1.png';
const LINK_FOR_SECOND_IMAGE = '../../../images/home-page/animatetBox.gif'
const LINK_FOR_THRIT_IMAGE = '../../../images/home-page/image2.png';

const ALT_FOR_FIRST_IMAGE = 'greetingCartOne';
const ALT_FOR_SECOND_IMAGE = 'animatedBox';
const ALT_FOR_THIRD_IMAGE = 'greetingCartThird';

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
            <FirstSectionBanner goToShop={goToShop} linkToImage={LINK_FOR_FIRST_IMAGE} altToImage={ALT_FOR_FIRST_IMAGE} />
            <SecondSectionBanner goToShop={goToShop} linkToImage={LINK_FOR_SECOND_IMAGE} altToImage={ALT_FOR_SECOND_IMAGE} />
            <FirstSectionBanner goToShop={goToShop} linkToImage={LINK_FOR_THRIT_IMAGE} altToImage={ALT_FOR_THIRD_IMAGE} />
            <Partners />
            <SaveLastFiveVisitedCards />
        </div>
    )
}