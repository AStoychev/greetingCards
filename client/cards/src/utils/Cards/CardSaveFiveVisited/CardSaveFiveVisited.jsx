import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './CardSaveFiveVisited.module.css'

export const CardSaveFiveVisited = ({
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
            <article className={styles.article} onClick={onArticleClick}>
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
                </div>
                <div className={styles.title}>
                    <button>Add to Cart</button>
                </div>
            </article>
    );
}

