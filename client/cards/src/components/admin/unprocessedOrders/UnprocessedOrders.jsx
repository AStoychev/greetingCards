import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { orderServiceFactory } from '../../../services/orderService';
import { showDateTime } from '../functions/showDateTime';
import { takeTypeOrder } from '../functions/takeTypeOrder';
import { copyOnClickId } from '../functions/copyOnClickId';

import { Pattern } from '../pattern/Pattern';
import { ModalOrder } from '../modalOrder/ModalOrder';
import { ModalStatus } from './modalChangeStatus/ModalStatus';
import { TableHeading } from '../adminUtils/tableHeading/TableHeading';
import { TooltipMessageOrder } from '../../../utils/Tooltip/TooltipMessageOrder/TooltipMessageOrder';

import styles from './UnprocessedOrders.module.css'

export const UnprocessedOrders = () => {
    const [unprocesedOrders, setUnprocessedOrders] = useState([]);
    const [copyId, setCopyId] = useState();
    const [copyMessage, setCopyMessage] = useState();
    const [showModal, setShowModal] = useState('');
    const allOrdersService = orderServiceFactory();

    const navigate = useNavigate();

    useEffect(() => {
        allOrdersService.getAll()
            .then(result => {
                let type = takeTypeOrder(result, 'Unprocessed')
                setUnprocessedOrders(type);
            })
    }, [])

    const goToCard = (cardId) => {
        navigate(`/catalog/${cardId}`)
    };

    const showOrder = (id, firstName, lastName, order) => {
        let fullName = `${firstName} ${lastName}`
        setShowModal(<ModalOrder modalController={modalController} fullName={fullName} order={order} />)
    };

    const changeStatusToRefuse = () => {

    };

    const modalController = () => {
        setShowModal('');
    }

    const modalPressYes = () => {
        setUnprocessedOrders()
    }

    const changeStatusToSend = (e) => {
        setShowModal(<ModalStatus modalController={modalController} modalPressYes={modalPressYes} id={e.target.value} />)
    };

    const onClickId = (id) => {
        setCopyId(copyOnClickId(id)[0]);
        setCopyMessage(copyOnClickId(id)[1])
    }

    return (
        <Pattern pageWithOrder={
            <div className={styles.mainContainer}>
                {showModal}
                <div className={styles.tableContainer}>
                    <TableHeading />

                    {
                        unprocesedOrders.length
                            ?
                            unprocesedOrders.map((x, index) => (
                                <div className={styles.tableRow} key={x._id}>
                                    <div className={styles.rowItem}>{index + 1}</div>
                                    <div className={styles.rowItem} onClick={() => onClickId(x._id)} title={`Click to copy ID ${x._id}`}>{copyId === x._id ? copyMessage : 'Copy Order ID'}</div>
                                    <div className={styles.rowItem}>{showDateTime(x.createdAt)[0]}</div>
                                    <div className={styles.rowItem}>{x.city} {x.address}</div>
                                    <div className={styles.rowItem}>{x.firstName} {x.lastName}</div>
                                    <div className={styles.rowItem}>{x.shippingPlace} with {x.shippingCompany}</div>
                                    <div className={styles.rowItem}>{x.payment}</div>
                                    <div className={styles.rowItem}>{x.price}</div>
                                    <div className={styles.rowItem}>{x.orderStatus}</div>
                                    <div className={styles.rowItem}>
                                        {
                                            x.takeMessage
                                                ?
                                                <div className={styles.tooltipMessage}>
                                                    <TooltipMessageOrder text={x.takeMessage}>
                                                        <img className={styles.messageIcon} src='../../../images/message.png' alt='haveMessage' />
                                                    </TooltipMessageOrder>
                                                </div>
                                                :
                                                <img className={styles.messageIcon} src='../../../images/none.png' alt='noneMessage' />
                                        }
                                    </div>
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
    );
}