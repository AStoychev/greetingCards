import { useState, useEffect } from 'react';

import { useAdminModalOrder } from '../../../hooks/useAdminModalOrder';

import { orderServiceFactory } from '../../../services/orderService';
import { takeTypeOrder } from '../functions/takeTypeOrder';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { ShowOrders } from '../adminUtils/orders/ShowOrders';

import styles from './RefussedOrders.module.css'

export const RefussedOrders = () => {

    const [refuseOrders, sestRefusedOrders] = useState([]);
    const { userData, showModal, showOrder } = useAdminModalOrder();
    const allOrdersService = orderServiceFactory();

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