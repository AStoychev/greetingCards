import { useState, useEffect } from 'react';

import { orderServiceFactory } from '../../../services/orderService';
import { showDateTime } from '../functions/showDateTime';
import { changeColorOfStatus } from '../functions/changeColorOfStatus';
import { copyOnClickId } from '../functions/copyOnClickId';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TooltipMessageOrder } from '../../../utils/Tooltip/TooltipMessageOrder/TooltipMessageOrder';

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [copyId, setCopyId] = useState();
    const [copyMessage, setCopyMessage] = useState();
    const [showModal, setShowModal] = useState();
    const allOrdersService = orderServiceFactory();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                setAllOrders(result)
            })
    }, [])

    const showOrder = (id, firstName, lastName, order) => {
        let fullName = `${firstName} ${lastName}`
        setShowModal(<ModalOrder modalController={modalController} fullName={fullName} order={order} />)
    };

    const modalController = () => {
        setShowModal('');
    }

    const onClickId = (id) => {
        setCopyId(copyOnClickId(id)[0]);
        setCopyMessage(copyOnClickId(id)[1])
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
                                    <div className={styles.rowItem} onClick={() => onClickId(x._id)} title={`Click to copy ID ${x._id}`}>{copyId === x._id ? copyMessage : 'Copy Order ID'}</div>
                                    <div className={styles.rowItem}>{showDateTime(x.createdAt)[0]}</div>
                                    <div className={styles.rowItem}>{x.city} {x.postCode} <br></br> {x.address}</div>
                                    <div className={styles.rowItem}>{x.firstName} {x.lastName} <br></br> +359 {x.phoneNumber}</div>
                                    <div className={styles.rowItem}>{x.shippingPlace} with {x.shippingCompany}</div>
                                    <div className={styles.rowItem}>{x.payment}</div>
                                    <div className={styles.rowItem}>{x.price}</div>
                                    <div className={styles.rowItem} style={{ color: changeColorOfStatus(x.orderStatus), fontWeight: 'bold' }}>{x.orderStatus}</div>
                                    <div className={styles.rowItem}>
                                        {
                                            x.takeMessage
                                                ?
                                                <div className={styles.tooltipMessage}>
                                                    <TooltipMessageOrder text={x.takeMessage}>
                                                        <img className={styles.messageIcon} src='../../../images/message.png' alt='haveMessage' />
                                                    </TooltipMessageOrder>
                                                </div>
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