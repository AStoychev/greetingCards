import { useState } from 'react';

import { BasketModal } from '../../../utils/Modals/basketModal/BasketModal';

import { TiShoppingCart } from "react-icons/ti";
import styles from './Basket.module.css'

export const Basket = () => {

    const [purchaseModal, setPurchaseModal] = useState(false);

    const onPurchseModal = () => {
        setPurchaseModal(!purchaseModal)
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
            <div className={styles.basketMain} onClick={onPurchseModal}>
                {/* <div className={styles.basketMain} onMouseEnter={showOrder} onMouseLeave={closeOrder} onClick={onBascketClick}> */}
                {purchaseModal && <BasketModal onPurchseModal={onPurchseModal}/>}
                <div className={styles.innerBascketOne}>
                    <TiShoppingCart className={styles.bascketLogo} />
                </div>
                <div className={styles.innerBascketTwo}>
                    {/* {price} */}
                </div>
            </div>
        </div>
    );
}