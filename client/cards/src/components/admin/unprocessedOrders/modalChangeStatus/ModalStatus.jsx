import { useEffect } from 'react';

import { useForm } from '../../../../hooks/useForm';
import { useOrderContext } from '../../../../contexts/OrderContext';

import { useService } from '../../../../hooks/useService';
import { orderServiceFactory } from '../../../../services/orderService';
import { unPackingOrder } from '../../../../functions/localStorageFunction/unPackingOrder';
import { totalPrice } from '../../../../functions/totalPrice';

import styles from './ModalStatus.module.css'

export const ModalStatus = ({
    modalController,
    modalPressYes,
    id,
}) => {

    const { onOrderEditSubmit } = useOrderContext();
    const orderService = useService(orderServiceFactory);

    const { values, changeHandler, onSubmit, changeStatus } = useForm({
        orderStatus: '',

    }, onOrderEditSubmit);

    useEffect(() => {
        orderService.getOne(id)
            .then(result => {
                changeStatus(result);
            });
    }, [id]);

    const closeModal = () => {
        modalController();
    };

    const pressYes = (e) => {
        onSubmit(e);
        modalController();
        window.location.reload();
    }

    return (
        <div className={styles.containerModal}>
            <div className={styles.closeModalTopButton} onClick={closeModal}>X</div>
            <div className={styles.mainFieldModal}>
                <span>Confirm Status Change</span>
            </div>
            <div className={styles.modalButtons}>
                <button className={styles.buttonNo} onClick={closeModal}>No</button>

                <form id="orderStatus" method='POST' onSubmit={onSubmit}>
                    <div className="submit">
                        <label htmlFor="orderStatus"></label>
                        <input
                            type="hidden"
                            name="orderStatus"
                            id="orderStatus"
                            value={values.orderStatus = 'Send'}
                            onChange={changeHandler}
                        />
                        <div>
                            <input className="submit" type="submit" value="Yes" onClick={pressYes}/>
                        </div>
                    </div>
                </form>
                
            </div>
        </div>
    );
}
