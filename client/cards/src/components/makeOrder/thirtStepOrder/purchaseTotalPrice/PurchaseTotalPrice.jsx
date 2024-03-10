import { totalPrice } from '../../../../functions/totalPrice';

import styles from './PurchaseTotalPrice.module.css';

export const PurchaseTotalPrice = () => {
    return (
        <div className={styles.purchaseTotalPrice}>
            <div>Final Price:</div>
            <div>{totalPrice()}</div>
            <div>BGN</div>
        </div>
    )
}