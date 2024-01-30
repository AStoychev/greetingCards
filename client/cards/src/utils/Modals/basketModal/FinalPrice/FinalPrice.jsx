import { totalPrice } from "../../../../functions/totalPrice";

import styles from './FinalPrice.module.css'

export const FinalPrice = () => {
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