import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AddToCardButton } from '../AddToCardButton/AddToCardButton';

import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './Card.module.css'

export const Card = ({
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

    const mouseLeaveImage = () => {
        setCoverImage(card.imageUrl)
    }

    return (
        <div className={styles.container}>
            <article className={styles.article}>
                {/* {message} */}
                <div className={styles.mainCardDiv}>
                    <div className={styles.itemInfoWrapper}>
                        <div className={styles.image} onClick={onArticleClick} onMouseEnter={mouseOverImage} onMouseLeave={mouseLeaveImage}>
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
                </div>
                <AddToCardButton card={card}/>
            </article>
        </div>
    );
}

