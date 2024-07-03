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
    const [userData, setUserData] = useState('');
    const [showModal, setShowModal] = useState(false);
    const allOrdersService = orderServiceFactory();

    const showOrder = (id, firstName, lastName, order) => {
        setUserData({
            fullName: `${firstName} ${lastName}`,
            id: id,
            order: order
        });
        setShowModal(!showModal);
    };

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                let type = takeTypeOrder(result, 'Refused')
                sestRefusedOrders(type);
            })
    }, []);

    return (
        <Pattern pageWithOrder={
            <div className={styles.mainContainer}>
                {showModal && <ModalOrder modalController={showOrder} fullName={userData.fullName} order={userData.order} />}
                <div className={styles.tableContainer}>
                    <TableHeading />
                    <ShowOrders showOrder={showOrder} />
                </div>
            </div>
        } />
    );
}