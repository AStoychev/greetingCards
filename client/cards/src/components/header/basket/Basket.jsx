import { useState, useEffect } from 'react';

import { BasketModal } from '../../../utils/Modals/basketModal/BasketModal';

import { addToOrder } from '../../../functions/addToOrder';

import styles from './Basket.module.css'

export const Basket = () => {

    const [purchase, setPurchase] = useState(0);
    const [purchaseModal, setPurchaseModal] = useState([]);

    const showOrder = () => {
        setPurchase(1)
    };

    const closeOrder = () => {
        setPurchase(0)
    };

    const onPurchseModal = (data) => {
        if (data === 'Close') {
            setPurchaseModal([])
        } else {
            console.log('Yes')
        }
    };

    const onBascketClick = () => {
        setPurchaseModal(<BasketModal onPurchseModal={onPurchseModal}/>)
    };


    return (
        <div className={styles.mainRight}>
            <div className={styles.basketMain}>
                {purchaseModal}
                <div className={styles.innerBascketOne} onMouseEnter={showOrder} onMouseLeave={closeOrder} onClick={onBascketClick}>
                    {
                        purchase === 0
                            ?
                            <img className={styles.bascketLogo} src="images/purchase.png" alt="purchase" />
                            :
                            <img className={styles.bascketLogo} src="images/purchaseHover.png" alt="purchase" />
                    }
                    {/* <img className={styles.bascketLogo} src="images/purchase.png" alt="purchase" /> */}
                </div>
                <div className={styles.innerBascketTwo}>
                    {/* {price} */}
                </div>
            </div>
        </div>
    );
}