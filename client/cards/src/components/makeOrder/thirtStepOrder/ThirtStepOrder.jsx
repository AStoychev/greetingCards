import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { OrderContext } from "../../../contexts/OrderContext";

import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";
import { ButtonBack } from "../buttonBack/ButtonBack";

import { totalPrice } from "../../../functions/totalPrice";
import { showAllPurchase } from "../../../functions/localStorageFunction/showAllPurchase";
import { showMakeOrderData } from "../../../functions/localStorageFunction/showMakeOrderData";
import { checkForDiscount } from "../../../functions/checkForDiscount";
import { unPackingOrder } from "../../../functions/localStorageFunction/unPackingOrder";

import styles from './ThirtStepOrder.module.css'

export const ThirtStepOrder = () => {

    const { onCreateOrderSubmit } = useContext(OrderContext);
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
        createdAt:unPackingOrder()[13],
    }, onCreateOrderSubmit)

    const navigate = useNavigate();

    const backStep = () => {
        navigate('/make-second-step-order')
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Final Steps</div>
                <GraphicksOrder />

                <div className={styles.dataContainer}>
                    <div className={styles.buttonsNextBack}>

                        <div className={styles.formTopField}>
                            <div className={styles.topFieldTitle}>COMPLETE YOUR INFORMATION</div>
                        </div>

                        {/* <div className={styles.titlePersonalInformation}>PERSONAL INFORMATION</div> */}

                        {showMakeOrderData().map((x) => (
                            <div className={styles.mainPersonalData} key={x.firstName}>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>FULL NAME:</div>
                                    <div className={styles.detailedData}>{x.firstName} {x.lastName}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>EMAIL:</div>
                                    <div className={styles.detailedData}>{x.email}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>PHONE NUMBER:</div>
                                    <div className={styles.detailedData}>{x.phoneNumber}</div>
                                </div>

                                <div className={styles.typeSeparator}></div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>SHIPPING COMPANY:</div>
                                    <div className={styles.detailedData}>{x.shippingCompany}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>SHIPPING PLACE:</div>
                                    <div className={styles.detailedData}>{x.shippingPlace}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>CITY:</div>
                                    <div className={styles.detailedData}>{x.city}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>POST CODE:</div>
                                    <div className={styles.detailedData}>{x.postCode}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>ADDRESS:</div>
                                    <div className={styles.detailedData}>{x.address}</div>
                                </div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>MESSAGE</div>
                                    <div className={styles.detailedData}>{x.takeMessage}</div>
                                </div>

                                <div className={styles.typeSeparator}></div>

                                <div className={styles.innerPersonalData}>
                                    <div className={styles.typePersonalData}>PAYMENT:</div>
                                    <div className={styles.detailedData}>{x.payment}</div>
                                </div>

                                <div className={styles.typeSeparator}></div>

                                <div className={styles.innerPrivacyPolicy}>
                                    I am aware of the privacy policy.
                                </div>

                            </div>
                        ))}

                        {/* Order information */}
                        {showAllPurchase().map((x) => (
                            <div className={styles.mainAllPurchase} key={x._id}>
                                <div className={styles.purchaseTitle}>
                                    <div className={styles.title}>
                                        {x.title}
                                    </div>
                                </div>

                                <div className={styles.purchaseQuantity}>
                                    <div className={styles.quantity}>
                                        {x.quantity}
                                    </div>
                                </div>

                                <div className={styles.multiplySign}>
                                    <div className={styles.multiply}>
                                        x
                                    </div>
                                </div>

                                <div className={styles.purchasePrice}>
                                    <div className={styles.price}>
                                        {checkForDiscount(x.price, x.discount)}
                                    </div>
                                </div>

                                <div className={styles.purchaseFinalPrice}>
                                    <div className={styles.finalPrice}>
                                        {(x.quantity * (checkForDiscount(x.price, x.discount))).toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className={styles.purchaseTotalPrice}>
                            <div>Final Price:</div>
                            <div>{totalPrice()}</div>
                            <div>BGN</div>
                        </div>


                        <div className={styles.bottomButtons}>
                            <div className={styles.back}>
                                <ButtonBack backStep={backStep} page={'BACK'} />
                            </div>
                            <div className={styles.next}>
                                <div className={styles.nextStep}>
                                    <button onClick={onSubmit} className={styles.nextButton}>FINISH</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}