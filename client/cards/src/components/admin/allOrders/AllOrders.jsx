import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { orderServiceFactory } from "../../../services/orderService";

import { checkForDiscount } from "../../../functions/checkForDiscount";
import { totalPrice } from "../../../functions/totalPrice";

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [orders, setOrders] = useState('off');
    const [idOrder, setIdOrder] = useState();
    const allOrdersService = orderServiceFactory();

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

    return (
        <div>
            {allOrders.map((x) => (
                <div key={x._id}>
                    <div className={styles.orderRow}>
                        <span className={styles.spanOrder}>ID:</span>
                        {x._id}
                        <span className={styles.spanOrder}>To:</span>
                        {x.city} - {x.address}
                        <span className={styles.spanOrder}>Client:</span>
                        {x.firstName} {x.lastName}
                        <span className={styles.spanOrder}>Shipping:</span>
                        {x.shippingPlace} <b>with</b> {x.shippingCompany}
                        <span className={styles.spanOrder}>Payment:</span>
                        {x.payment}
                        <span className={styles.spanOrder}>Payment:</span>
                        {x.price}

                        <button onClick={showOrder} value={x._id} className={styles.accordionButtonOrder}>ORDER</button>
                        {orders === 'on' && idOrder === x._id
                            ?
                            <div className={styles.accordion}>
                                {x.orders.map((order) => (
                                    <div className={styles.orders} key={order._id}>
                                        <div className={styles.innerOrders}>
                                            <div><img className={styles.imageOrders} src={`${order.imageUrl}`} onClick={() => goToCard(order._id)} /></div>
                                            <div><b>{order.title}</b></div>
                                            <div>Quantity:<b>{order.quantity}</b></div>
                                            <div>First Price:<b>{order.price}</b></div>
                                            <div>Discount:<b>{order.discount ? order.discount : 'no discount'}</b></div>
                                            <div>Price with Discount:<b>{checkForDiscount(order.price, order.discount)}</b></div>
                                            <div>Final Price for this product:<b>{checkForDiscount(order.price, order.discount) * order.quantity}</b></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            :
                            ''
                        }

                    </div>
                </div>
            ))}
        </div>
    );
}