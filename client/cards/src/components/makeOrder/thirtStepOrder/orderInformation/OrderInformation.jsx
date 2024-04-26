import { showAllPurchase } from '../../../../functions/localStorageFunction/showAllPurchase';
import { checkForDiscount } from '../../../../functions/checkForDiscount';

import styles from './OrderInformation.module.css';

export const OrderInformation = () => {
    return (
        <div>
            {showAllPurchase().map((x) => (
                <div className={styles.mainAllPurchase} key={x._id}>
                    <div className={styles.purchaseTitle}>
                        <div className={styles.title}>
                            {x.title}
                        </div>
                    </div>
                    <div className={styles.purchaseQuantity}>
                        <div className={styles.quantity}>
                            {x.quantity}
                        </div>
                    </div>
                    <div className={styles.multiplySign}>
                        <div className={styles.multiply}>
                            x
                        </div>
                    </div>
                    <div className={styles.purchasePrice}>
                        <div className={styles.price}>
                            {checkForDiscount(x.price, x.discount)}
                        </div>
                    </div>
                    <div className={styles.purchaseFinalPrice}>
                        <div className={styles.finalPrice}>
                            {(x.quantity * (checkForDiscount(x.price, x.discount))).toFixed(2)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}