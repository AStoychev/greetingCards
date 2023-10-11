import { useState, useEffect } from 'react';

import { BasketModal } from '../../../utils/Modals/basketModal/BasketModal';

import { addToOrder } from '../../../functions/addToOrder';

import styles from './Basket.module.css'

export const Basket = () => {

    const [purchase, setPurchase] = useState(0);
    const [purchaseModal, setPurchaseModal] = useState([]);

    const onPurchseModal = (data) => {
        if (data === 'Close') {
            setPurchaseModal([])
        }
    };

    const showOrder = () => {
        setPurchaseModal(<BasketModal onPurchseModal={onPurchseModal} />)
        setPurchase(1)
    };

    const closeOrder = () => {
        setPurchaseModal([]);
        setPurchase(0)
    };

    const onBascketClick = () => {
        setPurchaseModal(<BasketModal onPurchseModal={onPurchseModal} />)
    };


    // Try to close order on click outside order field
    const onClickOutSide = (e) => {
        if (purchaseModal != false && e.target.closest("#mainPopup") === null) {
            setPurchaseModal(false)
        }
        // console.log(e.target.closest('#mainPopup'));
    }


    return (
        <div className={styles.mainRight} onClick={onClickOutSide}>
            <div className={styles.basketMain} onMouseEnter={showOrder} onMouseLeave={closeOrder} onClick={onBascketClick}>
                {purchaseModal}
                <div className={styles.innerBascketOne}>
                    {
                        purchase === 0
                            ?
                            <img className={styles.bascketLogo} src="../../../images/purchase.png" alt="purchase" />
                            :
                            <img className={styles.bascketLogo} src="../../../images/purchaseHover.png" alt="purchase" />
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