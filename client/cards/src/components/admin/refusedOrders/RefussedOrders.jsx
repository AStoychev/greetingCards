import { useState, useEffect } from 'react';

import { orderServiceFactory } from '../../../services/orderService';
import { takeTypeOrder } from '../functions/takeTypeOrder';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { ShowOrders } from '../adminUtils/orders/ShowOrders';

import styles from './RefussedOrders.module.css'

export const RefussedOrders = () => {

    const [refuseOrders, sestRefusedOrders] = useState([]);
    const [idOrder, setIdOrder] = useState();
    const [showModal, setShowModal] = useState();
    const allOrdersService = orderServiceFactory();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                let type = takeTypeOrder(result, 'Refused')
                sestRefusedOrders(type);
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
                    <TableHeading />

                    <ShowOrders showOrder={showOrder}/>

                </div>
            </div>
        } />
    );
}