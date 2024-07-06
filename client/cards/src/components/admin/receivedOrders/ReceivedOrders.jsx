import { useState, useEffect } from 'react';

import { useAdminModalOrder } from '../../../hooks/useAdminModalOrder';

import { orderServiceFactory } from '../../../services/orderService';
import { showDateTime } from '../functions/showDateTime';
import { takeTypeOrder } from '../functions/takeTypeOrder';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';

import styles from './ReceivedOrders.module.css'

export const ReceivedOrders = () => {
    const [receivedOrders, setReceivedOrders] = useState([]);
    const {userData, showModal, showOrder} = useAdminModalOrder();
    const allOrdersService = orderServiceFactory();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                let type = takeTypeOrder(result, 'Received')
                setReceivedOrders(type);
            })
    }, [])

    return (
        <Pattern pageWithOrder={
            <div className={styles.mainContainer}>
                {showModal && <ModalOrder modalController={showOrder} fullName={userData.fullName} id={userData.id} order={userData.order} />}
                <div className={styles.tableContainer}>
                    <TableHeading />

                    {
                        receivedOrders.length ?
                            receivedOrders.map((x, index) => (
                                <div className={styles.tableRow} key={x._id}>
                                    <div className={styles.rowItem}>{index + 1}</div>
                                    <div className={styles.rowItem}>{x._id}</div>
                                    <div className={styles.rowItem}>{showDateTime(x.createdAt)[0]}</div>
                                    <div className={styles.rowItem}>{x.city} {x.address}</div>
                                    <div className={styles.rowItem}>{x.firstName} {x.lastName}</div>
                                    <div className={styles.rowItem}>{x.shippingPlace} with {x.shippingCompany}</div>
                                    <div className={styles.rowItem}>{x.payment}</div>
                                    <div className={styles.rowItem}>{x.price}</div>
                                    <div className={styles.rowItem}>{x.orderStatus}</div>
                                    <div className={styles.rowItemOrder}><button className={styles.buttonSeeItemOrder} onClick={() => showOrder(x._id, x.firstName, x.lastName, x.orders)} value={x._id}>SEE ITEMS</button></div>
                                    <div className={styles.rowSubContainer}>
                                        <div className={styles.rowItem}>Sub item 1</div>
                                        <div className={styles.rowItem}>Sub item 2</div>
                                    </div>
                                </div>
                            ))
                            :
                            <div>Not received orders</div>
                    }

                </div>
            </div>
        } />
    );
}