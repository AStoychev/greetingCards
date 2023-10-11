import { useState, useEffect } from 'react';

import { orderServiceFactory } from '../../../services/orderService';
import { showDateTime } from '../functions/showDateTime';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrders] = useState('off');
    const [idOrder, setIdOrder] = useState();
    const [showModal, setShowModal] = useState();
    const allOrdersService = orderServiceFactory();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                setAllOrders(result)
            })
    }, [])

    const showOrder = (id, firstName, lastName, order) => {
        setIdOrder(id);
        let fullName = `${firstName} ${lastName}`
        setShowModal(<ModalOrder modalController={modalController} fullName={fullName} order={order} />)
    };

    const modalController = () => {
        setShowModal('');
    }

    return (
        <Pattern pageWithOrder={
            <div className={styles.mainContainer}>
                {showModal}
                <div className={styles.tableContainer}>
                    <div className={styles.tableRowHeading}>
                        <div className={styles.rowItem}>#</div>
                        <div className={styles.rowItem}>ID</div>
                        <div className={styles.rowItem}>Date</div>
                        <div className={styles.rowItem}>Address</div>
                        <div className={styles.rowItem}>Client</div>
                        <div className={styles.rowItem}>Shipping</div>
                        <div className={styles.rowItem}>Payment</div>
                        <div className={styles.rowItem}>Price</div>
                        <div className={styles.rowItem}>Status</div>
                        <div className={styles.rowItem}>Message</div>
                        <div className={styles.rowItem}>Order</div>
                        <div className={styles.rowItem}>Action</div>
                    </div>

                    {
                        allOrders.length ?
                            allOrders.map((x, index) => (
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
                                    <div className={styles.rowItem} title={`${x.takeMessage ? x.takeMessage : ''}`}>
                                        {
                                            x.takeMessage
                                                ?
                                                <img className={styles.messageIcon} src='../../../images/message.png' alt='haveMessage' />
                                                :
                                                <img className={styles.messageIcon} src='../../../images/none.png' alt='noneMessage' />
                                        }
                                    </div>
                                    <div className={styles.rowItemOrder}><button className={styles.buttonSeeItemOrder} onClick={() => showOrder(x._id, x.firstName, x.lastName, x.orders)} value={x._id}>SEE ITEMS</button></div>
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
            </div>
        } />
    );
}