import { useState, useEffect } from 'react';

import { RowItems } from './rowItems/RowItems';

import { orderServiceFactory } from '../../../../services/orderService';
import { copyOnClickId } from '../../functions/copyOnClickId';

import styles from './ShowOrders.module.css';

export const ShowOrders = ({
    showOrder,
}) => {
    const [allOrders, setAllOrders] = useState([]);
    const [copyId, setCopyId] = useState();
    const [copyMessage, setCopyMessage] = useState();
    const allOrdersService = orderServiceFactory();

    const onClickId = (id) => {
        setCopyId(copyOnClickId(id)[0]);
        setCopyMessage(copyOnClickId(id)[1])
    };

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                setAllOrders(result)
            })
    }, []);

    return (
        <div>
            {
                allOrders.length ?
                    allOrders.map((x, index) => (
                        <div className={styles.tableRow} key={x._id}>
                            <RowItems onClickId={onClickId} copyId={copyId} copyMessage={copyMessage} x={x} index={index}/>
                            
                            <div className={styles.rowItemOrder}>
                                <button className={styles.buttonSeeItemOrder} onClick={() => showOrder(x._id, x.firstName, x.lastName, x.orders)} value={x._id}>SEE ITEMS</button>
                            </div>
                            <div className={styles.rowSubContainer}>
                                <div className={styles.rowItem}>Sub item 1</div>
                                <div className={styles.rowItem}>Sub item 2</div>
                            </div>

                        </div>
                    ))

                    :

                    <div>Not orders</div>
            }
        </div>
    )
}