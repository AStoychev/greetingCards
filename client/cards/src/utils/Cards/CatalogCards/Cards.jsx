import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './Cards.module.css'
// import styles from '../../components/catalog/Catalog.module.css'

export const Cards = ({
    card,
}) => {
    const [coverImage, setCoverImage] = useState('');
    const navigate = useNavigate();

    const onArticleClick = () => {
        navigate(`/catalog/${card._id}`)
    }

    const mouseOverImage = () => {
        if (card.additionalImage[0]) {
            setCoverImage(card.additionalImage[0])
        }
    }

    const mouseLeaceImage = () => {
        setCoverImage(card.imageUrl)
    }

    return (
        <div>
            <article className={styles.article} onClick={onArticleClick}>
                {/* {message} */}
                <div onMouseEnter={mouseOverImage} onMouseLeave={mouseLeaceImage}>
                    <div className={styles.image}>
                        <img src={coverImage ? coverImage : card.imageUrl} alt='productImage' />
                    </div>

                    <div className={styles.title}>
                        <h3>{card.title}</h3>
                    </div>
                </div>


                <div className={styles.price}>
                    Price: {checkForDiscount(card.price, card.discount)}
                </div>

                <div className={styles.star}>
                    {/* <StarRating /> */}
                </div>


                <div className={styles.title}>
                    <button>Add to Cart</button>
                </div>
                {/* <Link className={styles.navigationLink} to={`/catalog/${card._id}`}>Details</Link> */}

            </article>
        </div>
    );
}

