import { useState } from 'react';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { ShowOrders } from '../adminUtils/orders/ShowOrders';

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {
    const [userData, setUserData] = useState('');
    const [showModal, setShowModal] = useState(false);

    const showOrder = (id, firstName, lastName, order) => {
        setUserData({
            fullName: `${firstName} ${lastName}`,
            id: id,
            order:order
        })
        setShowModal(!showModal)
    };


    return (
        <Pattern pageWithOrder={
            <div className={styles.mainContainer}>
                {showModal && <ModalOrder modalController={showOrder} id={userData?.id} fullName={userData?.fullName} order={userData?.order}/>}
                {/* {showModal} */}
                <div className={styles.tableContainer}>
                    <TableHeading />
                    <ShowOrders showOrder={showOrder}/>
                </div>
            </div>
        } />
    );
}
