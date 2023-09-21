import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { checkForDiscount } from '../../functions/checkForDiscount';

import styles from './Cards.module.css'
// import styles from '../../components/catalog/Catalog.module.css'

export const Cards = ({
    card,
}) => {

    const navigate = useNavigate();

    const onArticleClick = () => {
        navigate(`/catalog/${card._id}`)
    }

    return (
        <div>
            <article className={styles.article} key={card.id} onClick={onArticleClick}>
                {/* {message} */}
                <div className={styles.image}>
                    <img src={card.imageUrl} alt='productImage' />
                </div>

                <div className={styles.title}>
                    <h3>{card.title}</h3>
                </div>

                <div className={styles.description}>
                    This is {card.description}
                </div>

                <div className={styles.price}>
                    Price: {card.discount !== 0 ? checkForDiscount(card.price, card.discount) : card.price}
                    {/* Price: {card.price} */}
                    {/* <TryDiscount card={card} /> */}
                </div>

                <div className={styles.star}>
                    {/* <StarRating /> */}
                </div>


                <div className={styles.title}>
                    {/* <button onClick={onAdd}>Add to cart</button> */}
                </div>
                <Link className={styles.navigationLink} to={`/catalog/${card._id}`}>Details</Link>

            </article>
        </div>
    );
}

