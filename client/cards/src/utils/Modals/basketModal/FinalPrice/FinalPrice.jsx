import { showAllPurchase } from "../../../../functions/localStorageFunction/showAllPurchase";

import styles from './FinalPrice.module.css'

export const FinalPrice = () => {

    const totalPrice = () => {
        let price = 0;
        showAllPurchase().map((x) => {
            price += (x.price * x.quantity);
        });
        return price.toFixed(2)
    };

    return (
        <div>
            <div className={styles.mainFinalOrder}>
                <div className={styles.finalOrder}>
                    <div className={styles.final}>
                        Total Price: {totalPrice()} BGN
                    </div>
                </div>
            </div>
        </div>
    );
}