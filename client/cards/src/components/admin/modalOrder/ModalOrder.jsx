import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { checkForDiscount } from '../../../functions/checkForDiscount';
import { copyOnClickId } from '../functions/copyOnClickId';

import styles from './ModalOrder.module.css'

export const ModalOrder = ({
    modalController,
    id,
    fullName,
    order,
}) => {
    const [copyMessage, setCopyMessage] = useState();
    const [copyId, setCopyId] = useState();
    const closeModal = () => {
        modalController();
    };

    const navigate = useNavigate();

    const goToCard = (cardId) => {
        navigate(`/catalog/${cardId}`)
    }

    const finalOrderPriceForAdmin = () => {
        const totalPriceForEachCart = []
        order.map((x) => (
            totalPriceForEachCart.push(Number((x.quantity * checkForDiscount(x.price, x.discount)).toFixed(2)))
        ))
        return totalPriceForEachCart
    }

    const onClickId = (id) => {
        setCopyId(copyOnClickId(id)[0]);
        setCopyMessage(copyOnClickId(id)[1])
    }

    return (
        <div className={styles.containerModal}>
            <div className={styles.topField}>
                <img className={styles.orderImage} src='../../../images/shopping-bag.png' />
                <div className={styles.blueField}></div>
            </div>

            <div className={styles.secondField}>
                <div className={styles.mainFieldModal}>
                    <p>Order of <span className={styles.orderInformation}>{fullName}</span></p>
                    <p>Order ID <span className={styles.orderInformation}>{id}</span></p>
                </div>
                {order.map((x, index) => (
                    <div className={styles.tableRow} key={x._id}>
                        <div className={styles.rowItem}>{index + 1}</div>
                        <div className={styles.rowItem}>
                            <img className={styles.imageUrl} title={`Go to ${x.title}`} onClick={() => goToCard(x._id)} src={`${x.imageUrl}`} />
                        </div>
                        <div className={styles.rowItemId} onClick={() => onClickId(x._id)} title={`Click to copy ID ${x._id}`}>{copyId === x._id ? copyMessage : 'Copy ID'}</div>
                        <div className={styles.rowItem}>{x.title}</div>
                        <div className={styles.rowItem}>{x.quantity} x {checkForDiscount(x.price, x.discount)} BGN</div>
                        <div className={styles.rowItem}>{(x.quantity * checkForDiscount(x.price, x.discount)).toFixed(2)}</div>
                    </div>
                ))}
                <div className={styles.finalPrice}>Final Price: {(finalOrderPriceForAdmin().reduce((partialSum, a) => partialSum + a, 0)).toFixed(2)} BGN</div>
                <div className={styles.modalButtons}>
                    <div className={styles.buttonOk} onClick={closeModal}>OK</div>
                </div>
            </div>
            
        </div>
    );
}