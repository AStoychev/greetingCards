import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { MapOrder } from "./MapOrder/MapOrder";
import { FinalPrice } from "./FinalPrice/FinalPrice";
import { totalPrice } from "../../../functions/totalPrice";

import { showAllPurchase } from "../../../functions/localStorageFunction/showAllPurchase";

import styles from "./BasketModal.module.css"

export const BasketModal = ({
    onPurchseModal
}) => {
    const navigate = useNavigate();

    const handleClose = (data) => {
        onPurchseModal(data)
    }

    const firsStepOrder = () => {
        navigate(`/make-first-step-order`);
        handleClose('Close');
    };

    return (
        <div className={styles.container} onClick={() => handleClose('Close')}>
            <div className={styles.popup} id="mainPopup" onClick={e => { e.stopPropagation() }}>
                <div className={styles.wrapper}>
                    <button className={styles.closeButton} onClick={() => handleClose('Close')}>&times;</button>
                    <h2>My Order</h2>

                    <div className={styles.paragraphCookie}>
                        <MapOrder />
                        {
                            showAllPurchase().length === 0
                            &&
                            <div className={styles.emptyList}>Not purchase yet!</div>
                        }
                    </div>
                    
                    <FinalPrice />
                    <div className={styles.buttonsOrder}>
                        <div className={styles.buttonWrapper}>
                            <button className={styles.bottomButton} onClick={() => handleClose('Close')}>Close</button>
                            {parseFloat(totalPrice()) > 0 &&
                                <button className={styles.bottomButton} onClick={firsStepOrder}>Order</button>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
