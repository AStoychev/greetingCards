import { useState } from "react";

import { CardSaveFiveVisited } from "../../utils/Cards/CardSaveFiveVisited/CardSaveFiveVisited";

import styles from './SaveLastFiveVisitedCards.module.css'

export const SaveLastFiveVisitedCards = () => {
    let saveFiveItems = '';
    // let saveFiveItems = { ...localStorage };
    const saveItems = [];

    for (let i = 0; i < localStorage.length; i++) {
        let key = (localStorage.key(i));
        if (!key.startsWith('orders') && !key.startsWith('auth') && !key.startsWith('makeOrder')) {
            saveFiveItems = localStorage.getItem(localStorage.key(i));
            saveItems.push(JSON.parse(saveFiveItems));
        }
    }

    let lastFiveVisitedCarts = saveItems.slice(-5)

    // This code sorted last visited five items from local storage
    let sortedCarts = lastFiveVisitedCarts.sort((p1, p2) => ((p1.time < p2.time) ? -1 : 0))
    // let sortedCarts = lastFiveVisitedCarts.sort((p1, p2) => (p1.time < p2.time) ? 1 : (p1.time > p2.time) ? -1 : 0)
    lastFiveVisitedCarts = sortedCarts

    const CheckForSaveImage = () => {
        const storeLastFiveVisitedCart = []
        for (let i in lastFiveVisitedCarts) {

            if (lastFiveVisitedCarts[i]) {
                storeLastFiveVisitedCart.push(
                    <div className={`styles.column${i}`} key={i}>
                        <CardSaveFiveVisited card={lastFiveVisitedCarts[i]} />
                    </div>
                )
            }
        }
        return storeLastFiveVisitedCart
    }

    return (
        <div>
            {lastFiveVisitedCarts.length ?
                <div className={styles.lastFiveCart}>
                    <h1 className={styles.headerLastVisited}>Last Visited</h1>
                    <div className={styles.mainCartItems}>
                        <div className={styles.flexRow}>
                            <CheckForSaveImage />
                        </div>
                    </div>
                </div>
                : ''}
        </div>
    );
}
