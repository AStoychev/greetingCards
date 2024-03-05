import { useState } from 'react';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { ShowOrders } from '../adminUtils/orders/ShowOrders';

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {
    const [showModal, setShowModal] = useState();

    const showOrder = (id, firstName, lastName, order) => {
        let fullName = `${firstName} ${lastName}`
        setShowModal(<ModalOrder modalController={modalController} id={id} fullName={fullName} order={order} />)
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