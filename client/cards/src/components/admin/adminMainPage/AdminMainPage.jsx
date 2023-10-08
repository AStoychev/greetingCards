import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { orderServiceFactory } from "../../../services/orderService";

import { AdminAllOrders } from '../allOrders/AllOrders';

import styles from './AdminMainPage.module.css'

export const AdminMainPage = () => {
    const { isAuthenticated, userId, userEmail, userName } = useContext(AuthContext);

    const [orderField, setOrderField] = useState('');

    const showAllOrders = (field) => {
        setOrderField(field)
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainField}>

                <div className={styles.leftColumn}>
                    <div className={styles.lineUpOrder}>
                        <div>
                            <button onClick={() => showAllOrders(<AdminAllOrders/>)}>All Orders</button>
                            {/* <Link to={`/admin-main-page/all-order/${userId}`}>All Orders</Link> */}
                        </div>
                        <div>
                            <Link to={`/admin-main-page/unprocessed-order/${userId}`}>Unprocessed</Link>
                        </div>
                        <div>
                            <Link to={`/admin-main-page/processed-order/${userId}`}>Processed</Link>
                        </div>
                        <div>
                            <Link to={`/admin-main-page/send-order/${userId}`}>Sent</Link>
                        </div>
                        <div>
                            <Link to={`/admin-main-page/returned-order/${userId}`}>Returned</Link>
                        </div>
                        <div>
                            <Link to={`/admin-main-page/received-order/${userId}`}>Received</Link>
                        </div>

                    </div>
                </div>

                <div className={styles.middleColumn}>
                    {orderField !== ''
                    ?
                    orderField
                    :
                    <div className={styles.greetingField}>Hello Admin</div>
                    }
                </div>

            </div>
        </div>
    );
}