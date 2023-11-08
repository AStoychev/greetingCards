import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { checkForDiscount } from "../../../../functions/checkForDiscount";
import { showAllPurchase } from "../../../../functions/localStorageFunction/showAllPurchase";
import { deletePurchase } from "../../../../functions/localStorageFunction/deletePurchase";

import styles from './MapOrder.module.css'

export const MapOrder = () => {
    const [binHover, setBinHover] = useState(0);
    const navigate = useNavigate();

    const onArticleClick = (card) => {
        navigate(`/catalog/${card._id}`)
    };

    const deleteThisPurchase = (e) => {
        deletePurchase(e);
        setBinHover(0);
    };

    const onHoverBin = (e) => {
        setBinHover(e.target.value);
    };

    const outHoverBin = () => {
        setBinHover(0);
    };

    return (
        <div>
            {showAllPurchase().map((x) => (
                <div className={styles.purchaseRow} key={x._id}>
                    <div onClick={() => onArticleClick(x)}>
                        <img src={x.imageUrl} className={styles.purchaseImage} alt="image" />
                    </div>
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
                            {checkForDiscount(x.price, x.discount)}<span className={styles.priceValue}>BGN</span>
                            {/* {(x.price).toFixed(2)} */}
                        </div>
                    </div>
                    <div className={styles.finalPrice}>
                        <div className={styles.final}>
                            {(x.quantity * checkForDiscount(x.price, x.discount)).toFixed(2)}<span className={styles.priceValue}>BGN</span>
                        </div>
                    </div>
                    <div className={styles.deletePurchase}>
                        <button value={x._id} onClick={deleteThisPurchase} onMouseEnter={onHoverBin} onMouseLeave={outHoverBin}>
                            {
                                binHover === x._id
                                    ?
                                    <img
                                        alt={x._id}
                                        value={x._id}
                                        src="images/binOnHover.png"
                                        className={styles.deleteButton}
                                    />
                                    :
                                    <img
                                        alt={x._id}
                                        value={x._id}
                                        src="images/bin.png"
                                        className={styles.deleteButton}
                                    />
                            }
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}