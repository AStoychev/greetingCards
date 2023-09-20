import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { cardServiceFactory } from "../../services/cardService";

import styles from './CardDetails.module.css'

export const CardDetails = () => {
    const [card, setCard] = useState([]);
    const cardIdObj = useParams();
    const cardId = cardIdObj.cardId
    const allCardsService = cardServiceFactory();


    useEffect(() => {
        allCardsService.getOne(cardId)
            .then(result => {
                setCard(result)
            })
    }, []);

    console.log(card)

    return (
        <div>
            <div className={styles.container}>
                <h2>Details</h2>
                <div className={styles.columns3}>

                    <div className={styles.columnsLeft}>
                        <div className={styles.bgRed}>Other picture</div>
                    </div>

                    <div className={styles.columnsCenter}>
                        <div className={styles.bgPink}>
                            <img className="imageUrl" src={card.imageUrl} />
                        </div>
                    </div>

                    <div className={styles.columnsRight}>
                        <div className={styles.bgOrange}>
                            <article>
                                <h3>{card.title}</h3>
                                <h3>{card.description}</h3>
                                <h3>Price: {card.price} BGN</h3>
                            </article>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}