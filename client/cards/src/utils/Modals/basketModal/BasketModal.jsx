import { useState } from "react"
import { useNavigate } from "react-router-dom";

import { MapOrder } from "./MapOrder/MapOrder";
import { FinalPrice } from "./FinalPrice/FinalPrice";

import { showAllPurchase } from "../../../functions/localStorageFunction/showAllPurchase";
import { deletePurchase } from "../../../functions/localStorageFunction/deletePurchase";

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
        <div>
            <div className={styles.popup} id="mainPopup" onClick={e => { e.stopPropagation() }}>
                <div className={styles.container}>
                    {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
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
                        <div className={styles.buttonClose}>
                            <button className={styles.bottomButton} onClick={() => handleClose('Close')}>Close</button>
                        </div>
                        <div className={styles.buttonOrder}>
                            <button className={styles.bottomButton} onClick={firsStepOrder}>Order</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
