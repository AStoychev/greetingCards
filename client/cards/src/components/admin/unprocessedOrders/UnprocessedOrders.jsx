import { useState, useEffect, Fragment } from 'react';

import { useNavigate } from 'react-router-dom';

import { orderServiceFactory } from '../../../services/orderService';
import { showDateTime } from '../functions/showDateTime';

import { useForm } from '../../../hooks/useForm';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { ModalStatus } from './modalChangeStatus/ModalStatus';

import { checkForDiscount } from '../../../functions/checkForDiscount';

import styles from './UnprocessedOrders.module.css'

export const UnprocessedOrders = () => {
    const [unprocesedOrders, setUnprocessedOrders] = useState([]);
    const [orders, setOrders] = useState('off');
    const [idOrder, setIdOrder] = useState();
    const [showModal, setShowModal] = useState('');
    const allOrdersService = orderServiceFactory();

    const { values } = useForm();

    const orderItems = [];
    // const unprocessedOrders = [];

    const navigate = useNavigate();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                for (let i in result) {
                    if (result[i].orderStatus === 'Unprocessed') {
                        orderItems.push(result[i]);
                        setUnprocessedOrders(orderItems)
                        // setUnprocessedOrders([...unprocesedOrders, result[i]])

                    }
                };
                // setUnprocessedOrders(result)
            })
    }, [])

    const goToCard = (cardId) => {
        navigate(`/catalog/${cardId}`)
    };

    const showOrder = (id, firstName, lastName, order) => {
        setIdOrder(id);
        let fullName = `${firstName} ${lastName}`
        setShowModal(<ModalOrder modalController={modalController} fullName={fullName} order={order} />)
    };

    const changeStatusToRefuse = () => {

    };

    // for (let i in unprocesedOrders) {
    //     if (unprocesedOrders[i].orderStatus === 'Unprocessed') {
    //         unprocessedOrders.push(unprocesedOrders[i])
    //     }
    // };

    const modalController = () => {
        setShowModal('');
    }

    const modalPressYes = () => {
        setUnprocessedOrders()
    }

    const changeStatusToSend = (e) => {
        setShowModal(<ModalStatus modalController={modalController} modalPressYes={modalPressYes} id={e.target.value} />)
    };

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
                        <div className={styles.rowItem}>Order</div>
                        <div className={styles.rowItem}>Action</div>
                    </div>

                    {
                        unprocesedOrders.length
                            ?
                            unprocesedOrders.map((x, index) => (
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
                                        <div className={styles.rowItemButtons}><button className={styles.buttonProces} value={x._id} onClick={changeStatusToSend}>PROCESS</button></div>
                                        <div className={styles.rowItemButtons}><button className={styles.buttonRefuse} value={x._id} onClick={changeStatusToRefuse}>REFUSE</button></div>
                                    </div>
                                </div>
                            ))
                            :
                            <div>Not unprocessed orders</div>
                    }

                </div>
            </div>
        } />



        // <Pattern pageWithOrder={
        //     <div>
        //         {showModal}
        //         <div className={styles.titleTypeOrder}>
        //             <div className={styles.divTable}>
        //                 <div className={styles.headRow}>
        //                     <div className={styles.divCellNumber}>#</div>
        //                     <div className={styles.divCellId}>ID</div>
        //                     <div className={styles.divCellDate}>Date</div>
        //                     <div className={styles.divCellAddress}>Address</div>
        //                     <div className={styles.divCellClient}>Client</div>
        //                     <div className={styles.divCellShipping}>Shipping</div>
        //                     <div className={styles.divCellPayment}>Payment</div>
        //                     <div className={styles.divCellPrice}>Price</div>
        //                     <div className={styles.divCellStatus}>Status</div>
        //                     <div className={styles.divCellOrder}>Order</div>
        //                     <div className={styles.divCellAction}>Action</div>
        //                 </div>

        //                 {allOrders.map((x, index) => (
        //                     <Fragment key={x._id}>
        //                         <div className={styles.divRow}>
        //                             <div className={styles.divCellNumber}>{index + 1}</div>
        //                             <div className={styles.divCellId}>{x._id}</div>
        //                             <div className={styles.divCellDate}>9.10.2023</div>
        //                             <div className={styles.divCellAddress}>{x.city} - {x.address}</div>
        //                             <div className={styles.divCellClient}>{x.firstName} {x.lastName}</div>
        //                             <div className={styles.divCellShipping}>{x.shippingPlace} with {x.shippingCompany}</div>
        //                             <div className={styles.divCellPayment}>{x.payment}</div>
        //                             <div className={styles.divCellPrice}>{x.price}</div>
        //                             <div className={styles.divCellStatus} >{x.orderStatus}</div>
        //                             <div className={styles.divCellOrderButton}><button onClick={showOrder} value={x._id}>ORDER</button></div>
        //                             <div className={styles.divCellActionButton}>
        //                                 <div className={styles.buttonsAction}>
        //                                     <button className={styles.buttonProces} value={x._id} onClick={changeStatusToSend}>PROCESS</button>
        //                                     <button className={styles.buttonRefuse} value={x._id} onClick={changeStatusToRefuse}>REFUSE</button>
        //                                 </div>
        //                             </div>


        //                         </div>

        //                         <div>
        //                             {orders === 'on' && idOrder === x._id
        //                                 ?

        //                                 <div className={styles.accordion}>
        //                                     {x.orders.map((order) => (
        //                                         <div className={styles.orders} key={order._id}>
        //                                             <div className={styles.innerOrders}>
        //                                                 <div><img className={styles.imageOrders} src={`${order.imageUrl}`} onClick={() => goToCard(order._id)} /></div>
        //                                                 <div className={styles.itemInfo}>
        //                                                     <div><b>{order.title}</b></div>
        //                                                     <div>Quantity:<b>{order.quantity}</b></div>
        //                                                     <div>First Price:<b>{order.price}</b></div>
        //                                                     <div>Discount:<b>{order.discount ? order.discount : 'no discount'}</b></div>
        //                                                     <div>Price with Discount:<b>{checkForDiscount(order.price, order.discount)}</b></div>
        //                                                     <div>Final Price for this product:<b>{checkForDiscount(order.price, order.discount) * order.quantity}</b></div>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     ))}
        //                                 </div>
        //                                 :
        //                                 ''
        //                             }
        //                         </div>
        //                     </Fragment>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // } />
    );
}