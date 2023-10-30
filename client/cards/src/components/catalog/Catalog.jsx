import { useState, useEffect } from "react";

import { cardServiceFactory } from "../../services/cardService";

import { Cards } from "../../utils/Cards/CatalogCards/Cards";

import { SaveLastFiveVisitedCards } from "../saveInLocalStorage/SaveLastFiveVisitedCards";

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
        <div className={styles.productContainer} >
            <div id="app" className="container">

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                    </div>
                    <div className={styles.columnTwo}>
                    </div>
                </div>

                <div className={styles.grid}>
                    {allCards && allCards.map(card => (
                        < Cards card={card} key={card._id} />
                    ))}
                </div>
                < SaveLastFiveVisitedCards />
            </div>
        </div>
    );
}
