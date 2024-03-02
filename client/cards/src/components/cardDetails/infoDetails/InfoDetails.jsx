import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './InfoDetails.module.css';

export const InfoDetails = ({
    card,
    onDeleteClick,
}) => {
    const {isAdmin} = useContext(AuthContext);

    return (
        <div className={styles.columnsRight}>

            <div className={styles.bgRed}>
                <article className={styles.rightColumnArticle}>
                    <h3>{card.title}</h3>
                    <p className={styles.description}>{card.description}</p>
                    <p className={styles.price}>Price: {checkForDiscount(card.price, card.discount)} BGN</p>
                </article>
            </div>

            {isAdmin &&
                <div className={styles.buttonWrapper}>
                    <button className={styles.deleteButton} onClick={onDeleteClick}>Delete</button>
                    <Link className={styles.editLink} to={`/catalog/${card._id}/edit`}>Edit</Link>
                </div>
            }
        </div>
    )
}