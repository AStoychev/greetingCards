import { useState, useContext } from "react";

import { useForm } from "../../../hooks/useForm";
import { OrderContext } from "../../../contexts/OrderContext";

import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";
import { PersonalData } from "./personalData/PersonalData";
import { OrderInformation } from "./orderInformation/OrderInformation";
import { PurchaseTotalPrice } from "./purchaseTotalPrice/PurchaseTotalPrice";
import { BottomButtons } from "./bottomButtons/BottomButtons";
import { MakeOrderSpinner } from "../../../utils/Spinners/makeOrderSpinner/MakeOrderSpinner";

import { totalPrice } from "../../../functions/totalPrice";
import { unPackingOrder } from "../../../functions/localStorageFunction/unPackingOrder";

import background from '../../img/background.png'
import styles from './ThirtStepOrder.module.css'

export const ThirtStepOrder = () => {

    const { order, onCreateOrderSubmit } = useContext(OrderContext);
    const { onSubmit } = useForm({
        firstName: unPackingOrder()[0],
        lastName: unPackingOrder()[1],
        email: unPackingOrder()[2],
        phoneNumber: unPackingOrder()[3],
        shippingCompany: unPackingOrder()[4],
        shippingPlace: unPackingOrder()[5],
        city: unPackingOrder()[6],
        postCode: unPackingOrder()[7],
        address: unPackingOrder()[8],
        orders: unPackingOrder()[9],
        takeMessage: unPackingOrder()[10],
        payment: unPackingOrder()[11],
        privacyPolicy: unPackingOrder()[12],
        price: totalPrice(),
        createdAt: unPackingOrder()[13],
    }, onCreateOrderSubmit)

    const [spinner, setSpinner] = useState('');

    const onClickSubmit = (e) => {
        setSpinner(<MakeOrderSpinner />);
        onSubmit(e);
    }

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            {spinner}
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Final Steps</div>
                <GraphicksOrder />
                <div className={styles.dataContainer}>
                    <div className={styles.buttonsNextBack}>
                        <div className={styles.formTopField}>
                            <div className={styles.topFieldTitle}>COMPLETE YOUR INFORMATION</div>
                        </div>
                        <PersonalData />
                        <OrderInformation />
                        <PurchaseTotalPrice />
                        <BottomButtons onClickSubmit={onClickSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
}