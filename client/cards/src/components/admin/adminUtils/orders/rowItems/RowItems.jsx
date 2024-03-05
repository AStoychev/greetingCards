import { TooltipMessageOrder } from '../../../../../utils/Tooltip/TooltipMessageOrder/TooltipMessageOrder';

import { showDateTime } from '../../../functions/showDateTime';
import { changeColorOfStatus } from '../../../functions/changeColorOfStatus';

import styles from './RowItems.module.css';

export const RowItems = ({
    x,
    index,
    copyId,
    copyMessage,
    onClickId,
}) => {
    return (
        <>
            <div className={styles.rowItem}>{index + 1}</div>
            <div className={styles.rowItem} onClick={() => onClickId(x._id)} title={`Click to copy ID ${x._id}`}>{copyId === x._id ? copyMessage : 'Copy Order ID'}</div>
            <div className={styles.rowItem}>{showDateTime(x.createdAt)[0]}</div>
            <div className={styles.rowItem}>{x.city} {x.postCode} <br></br> {x.address}</div>
            <div className={styles.rowItem}>{x.firstName} {x.lastName} <br></br> +359 {x.phoneNumber}</div>
            <div className={styles.rowItem}>{x.shippingPlace} with {x.shippingCompany}</div>
            <div className={styles.rowItem}>{x.payment}</div>
            <div className={styles.rowItem}>{x.price}</div>
            <div className={styles.rowItem} style={{ color: changeColorOfStatus(x.orderStatus), fontWeight: 'bold' }}>{x.orderStatus}</div>
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
        </>
    )
}