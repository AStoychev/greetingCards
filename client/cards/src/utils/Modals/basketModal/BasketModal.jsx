import { useState } from "react"

import styles from "./BasketModal.module.css"

export const BasketModal = ({
    onPurchseModal
}) => {
    const [binHover, setBinHover] = useState(0);

    const handleClose = (data) => {
        onPurchseModal(data)
    }

    const showAllPurchase = () => {
        const allPurchase = []
        for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).startsWith('orders')) {
                let name = localStorage.key(i);
                allPurchase.push(JSON.parse(localStorage.getItem(name)))
            }
        }
        return allPurchase
    }

    const deletePurchase = (e) => {
        let item = e.target.alt
        for (let i = 0; i < localStorage.length; i++) {
            let deletePurchase = localStorage.key(i).split(' ');
            let id = deletePurchase.pop()
            if(item === id) {
                localStorage.removeItem(`orders ${item}`)
            }
        }
    }

    const onHoverBin = (e) => {
        setBinHover(e.target.value);
    }

    const outHoverBin = () => {
        setBinHover(0);
    }

    return (
        <div>
            <div className={styles.popup}>
                <div className={styles.container}>
                    {/* <button className={styles.closeButton} onClick={handleClose}>&times;</button> */}
                    <h2>Hello</h2>

                    <div className={styles.paragraphCookie}>

                        {showAllPurchase().map((x) => (
                            <div className={styles.purchaseRow} key={x._id}>
                                <div>
                                    <img src={x.imageUrl} className={styles.purchaseImage} alt="image" />
                                </div>
                                <div className={styles.purchaseTitle}>
                                    <div className={styles.title}>
                                        {x.title}
                                    </div>
                                </div>
                                <div className={styles.purchaseQuantity}>
                                    <div className={styles.quantity}>
                                        {1} x {(1 * x.price).toFixed(2)}
                                    </div>
                                </div>
                                <div className={styles.purchasePrice}>
                                    <div className={styles.price}>
                                        {(1 * x.price).toFixed(2)}
                                    </div>
                                </div>
                                <div className={styles.deletePurchase}>
                                    <button value={x._id} onClick={deletePurchase} onMouseEnter={onHoverBin} onMouseLeave={outHoverBin}>
                                        {
                                            binHover === x._id
                                                ?
                                                <img
                                                    alt={x._id}
                                                    value={x.BasketModal_id}
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

                    <button className={styles.letsGoButton} onClick={() => handleClose('Close')}>Close</button>
                    <button className={styles.letsGoButton} onClick={() => handleClose('Yes')}>Yes</button>
                </div>
            </div>
        </div>
    );
}
