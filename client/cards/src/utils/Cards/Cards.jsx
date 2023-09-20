import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../components/catalog/Catalog.module.css'

export const Cards = ({
    card,
}) => {
    return (
        <div>
            <article className={styles.article} key={card.id}>
                <div className={styles.title}>
                    <h3>{card.title}</h3>
                </div>
                {/* {message} */}
                <div className={styles.image}>
                    <img src={card.imageUrl} alt='productImage' />
                </div>

                <div className={styles.description}>
                    This is {card.description}
                </div>

                <div className={styles.price}>
                    Price: {card.price}
                    {/* <TryDiscount card={card} /> */}
                </div>

                <div className={styles.star}>
                    {/* <StarRating /> */}
                </div>


                <div className={styles.title}>
                    {/* <button onClick={onAdd}>Add to cart</button> */}
                </div>
                <Link className={styles.navigationLink} to={`/catalog/${card._id}`}>Catalog</Link>
            </article>
        </div>
    );
}

