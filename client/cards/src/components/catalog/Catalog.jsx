import { useState, useEffect } from "react";

import { cardServiceFactory } from "../../services/cardService";

import { Card } from "../../utils/Cards/CatalogCards/Card";
import { SaveLastFiveVisitedCards } from "../SaveInLocalStorage/SaveLastFiveVisitedCards";
import { Chat } from "../chat/Chat";

import styles from './Catalog.module.css'

export const Catalog = () => {
    const [allCards, setAllCards] = useState([]);
    const allCardsService = cardServiceFactory();

    useEffect(() => {
        allCardsService.getAll()
            .then(result => {
                setAllCards(result)
            })
    }, [])
    

    return (
        <div className={styles.container} >
            <div id="app" className={styles.itemsWrapper}>

                <div className={styles.items}>
                    {allCards && allCards.map(card => (
                        < Card card={card} key={card._id} />
                    ))}
                </div>

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                    </div>
                    <div className={styles.columnTwo}>
                    </div>
                </div>
                <SaveLastFiveVisitedCards />
            </div>
            <Chat />
        </div>
    );
}
