import { useState, useEffect, Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

import { Pattern } from '../pattern/Pattern';

import { orderServiceFactory } from '../../../services/orderService';
import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './SendOrders.module.css'

export const SendOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrders] = useState('off');
    const [idOrder, setIdOrder] = useState();
    const allOrdersService = orderServiceFactory();

    const sendOrders = [];

    const navigate = useNavigate();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                setAllOrders(result)
            })
    }, [])

    const goToCard = (cardId) => {
        navigate(`/catalog/${cardId}`)
    }

    const showOrder = (e) => {
        setIdOrder(e.target.value);
        if (orders === 'on') {
            setOrders('off');
        } else {
            setOrders('on');
        }
    }

    for (let i in allOrders) {
        if (allOrders[i].orderStatus === 'Send') {
            sendOrders.push(allOrders[i])
        }
    }
    return (
        <Pattern pageWithOrder={
            <div>
                <div className={styles.titleTypeOrder}>
                    <div className={styles.divTable}>
                        <div className={styles.headRow}>
                            <div className={styles.divCellNumber}>#</div>
                            <div className={styles.divCellId}>ID</div>
                            <div className={styles.divCellDate}>Date</div>
                            <div className={styles.divCellAddress}>Address</div>
                            <div className={styles.divCellClient}>Client</div>
                            <div className={styles.divCellShipping}>Shipping</div>
                            <div className={styles.divCellPayment}>Payment</div>
                            <div className={styles.divCellPrice}>Price</div>
                            <div className={styles.divCellStatus}>Status</div>
                            <div className={styles.divCellOrder}>Order</div>
                        </div>

                        {sendOrders.map((x, index) => (
                            <Fragment key={x._id}>
                                <div className={styles.divRow}>
                                    <div className={styles.divCellNumber}>{index + 1}</div>
                                    <div className={styles.divCellId}>{x._id}</div>
                                    <div className={styles.divCellDate}>9.10.2023</div>
                                    <div className={styles.divCellAddress}>{x.city} - {x.address}</div>
                                    <div className={styles.divCellClient}>{x.firstName} {x.lastName}</div>
                                    <div className={styles.divCellShipping}>{x.shippingPlace} with {x.shippingCompany}</div>
                                    <div className={styles.divCellPayment}>{x.payment}</div>
                                    <div className={styles.divCellPrice}>{x.price}</div>
                                    <div className={styles.divCellStatus} >{x.orderStatus}</div>
                                    <div className={styles.divCellOrderButton}><button onClick={showOrder} value={x._id}>ORDER</button></div>
                                </div>

                                <div>
                                    {orders === 'on' && idOrder === x._id
                                        ?

                                        <div className={styles.accordion}>
                                            {x.orders.map((order) => (
                                                <div className={styles.orders} key={order._id}>
                                                    <div className={styles.innerOrders}>
                                                        <div><img className={styles.imageOrders} src={`${order.imageUrl}`} onClick={() => goToCard(order._id)} /></div>
                                                        <div className={styles.itemInfo}>
                                                            <div><b>{order.title}</b></div>
                                                            <div>Quantity:<b>{order.quantity}</b></div>
                                                            <div>First Price:<b>{order.price}</b></div>
                                                            <div>Discount:<b>{order.discount ? order.discount : 'no discount'}</b></div>
                                                            <div>Price with Discount:<b>{checkForDiscount(order.price, order.discount)}</b></div>
                                                            <div>Final Price for this product:<b>{checkForDiscount(order.price, order.discount) * order.quantity}</b></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        :
                                        ''
                                    }
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>
            </div>
        } />
    );
}