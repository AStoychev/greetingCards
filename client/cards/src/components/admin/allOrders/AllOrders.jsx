import { useAdminModalOrder } from '../../../hooks/useAdminModalOrder';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { ShowOrders } from '../adminUtils/orders/ShowOrders';

import styles from './AllOrders.module.css'

export const AdminAllOrders = () => {
    const {userData, showModal, showOrder} = useAdminModalOrder();

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
