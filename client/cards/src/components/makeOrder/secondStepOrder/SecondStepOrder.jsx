import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";

import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";
import { ButtonBack } from "../buttonBack/ButtonBack";
import { Line } from "../line/Line";

import { showMakeOrderData } from "../../../functions/localStorageFunction/showMakeOrderData";

import styles from './SecondStepOrder.module.css'

export const SecondStepOrder = () => {
    const [checkbox, setCheckbox] = useState('');

    const checkForOrder = () => {
        const peronalData = [];
        if (showMakeOrderData()) {
            showMakeOrderData().map((x) => {
                peronalData.push(
                    x.firstName, x.lastName, x.email,
                    x.phoneNumber, x.shippingCompany,
                    x.shippingPlace, x.city, x.postCode,
                    x.address, x.payment, x.privacyPolicy)
            })
        }
        return peronalData
    }

    const { values, changeHandler } = useForm({
        firstName: checkForOrder()[0] ? checkForOrder()[0] : '',
        lastName: checkForOrder()[1] ? checkForOrder()[1] : '',
        email: checkForOrder()[2] ? checkForOrder()[2] : '',
        phoneNumber: checkForOrder()[3] ? checkForOrder()[3] : '',
        shippingCompany: checkForOrder()[4] ? checkForOrder()[4] : '',
        shippingPlace: checkForOrder()[5] ? checkForOrder()[5] : '',
        city: checkForOrder()[6] ? checkForOrder()[6] : '',
        postCode: checkForOrder()[7] ? checkForOrder()[7] : '',
        address: checkForOrder()[8] ? checkForOrder()[8] : '',
        payment: checkForOrder()[9] ? checkForOrder()[9] : '',
        privacyPolicy: checkForOrder()[10] ? checkForOrder()[10] : ''

    });

    const navigate = useNavigate();

    const onCheckPrivacyPolicy = () => {
        if (checkbox === '') {
            setCheckbox('check')
        }
        else if (checkbox === 'check') (
            setCheckbox('')
        )
    }

    const nextStep = () => {
        navigate('/make-thirth-step-order')
    }

    const backStep = () => {
        navigate('/make-first-step-order')
    }

    const savePersonalInformation = () => {
        localStorage.setItem('makeOrder', JSON.stringify(values))
        nextStep();
    }

    if (checkbox === 'check') {
        values.pricacyPolicy = checkbox
    }

    const changeAddresTitle = () => {
        if (values.shippingPlace === 'ToOffice') {
            return ('OFFICE')
        }
        else if (values.shippingPlace === 'ToYourAddress') {
            return ('YOUR')
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Order Information</div>

                <GraphicksOrder />

                <div className={styles.dataContainer}>
                    <form>
                        <div className={styles.formTopField}>
                            <div className={styles.topFieldTitle}>COMPLETE YOUR INFORMATION</div>
                        </div>

                        <div className={styles.firstAndLastName}>
                            <div className={styles.innerDivDataOrderName}>
                                <label htmlFor="first">FIRST*</label>
                                <input
                                    type="first"
                                    id="first"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={changeHandler}
                                />
                            </div>

                            <div className={styles.innerDivDataOrderName}>
                                <label htmlFor="last">LAST*</label>
                                <input
                                    type="last"
                                    id="last"
                                    name="lastName"
                                    value={values.lastName}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label htmlFor="email">EMAIL*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={values.email}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label htmlFor="phone">PHONE NUMBER*</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                onChange={changeHandler}
                            />
                        </div>

                        <Line />

                        <div className={styles.choosePaymentMehod}>SHIPPING</div>

                        <div className={styles.mainShipping}>

                            <div className={styles.innerDivShippingOne}>
                                <div className={styles.innerShippingType}>EkoShipping</div>
                                <div className={styles.logoShipping}>
                                    <img src="images/shipping-icons/box.png" alt="EkoShipping" />
                                </div>
                                <label htmlFor="EkoShipping">
                                    <input
                                        type="radio"
                                        id="EkoShipping"
                                        name="shippingCompany"
                                        value="EkoShipping"
                                        checked={values.shippingCompany === 'EkoShipping'}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </div>

                            <div className={styles.innerDivShippingTwo}>
                                <div className={styles.innerShippingType}>FreeShipping</div>
                                <div className={styles.logoShipping}>
                                    <img src="images/shipping-icons/freeshipping.png" alt="FreeShipping" />
                                </div>
                                <label htmlFor="FreeShipping">
                                    <input
                                        type="radio"
                                        id="FreeShipping"
                                        name="shippingCompany"
                                        value="FreeShipping"
                                        checked={values.shippingCompany === 'FreeShipping'}
                                        onChange={changeHandler}
                                    />
                                </label>
                            </div>
                        </div>

                        <Line />

                        {
                            values.shippingCompany
                                ?
                                <div className={styles.mainShipping}>
                                    <div className={styles.innerDivOffice}>
                                        <div className={styles.innerShippingType}>To The courier's office</div>
                                        <label htmlFor="ToOffice">
                                            <input
                                                type="radio"
                                                id="ToOffice"
                                                name="shippingPlace"
                                                value="To A Courier Office"
                                                checked={values.shippingPlace === 'To A Courier Office'}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>

                                    <div className={styles.innerDivOffice}>
                                        <div className={styles.innerShippingType}>To your address</div>
                                        <label htmlFor="ToYourAddress">
                                            <input
                                                type="radio"
                                                id="ToYourAddress"
                                                name="shippingPlace"
                                                value="To Your Address"
                                                checked={values.shippingPlace === 'To Your Address'}
                                                onChange={changeHandler}
                                            />
                                        </label>
                                    </div>
                                </div>
                                :
                                ''
                        }

                        <div className={styles.innerDivDataOrder}>
                            <label htmlFor="city">CITY*</label>
                            <input
                                type="city"
                                id="city"
                                name="city"
                                value={values.city}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label htmlFor="postCode">POST CODE*</label>
                            <input
                                type="post-code"
                                id="postCode"
                                name="postCode"
                                value={values.postCode}
                                onChange={changeHandler}
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label htmlFor="address">{changeAddresTitle()} ADDRESS*</label>
                            <input
                                type="address"
                                id="address"
                                name="address"
                                value={values.address}
                                onChange={changeHandler}
                            />
                        </div>

                        <Line />

                        <div className={styles.choosePaymentMehod}>CHOOSE PAYMENT METHOD</div>

                        <div className={styles.typePayment}>
                            <div className={styles.innerDivPayment}>
                                <label htmlFor="card">
                                    {/* <div className={styles.emptyCircleButton}>
                                        <img className={styles.tick} src="images/payment-icons/check.png" alt="checkmark" />
                                        <img className={styles.tick} src="images/payment-icons/checkmark.png" alt="checkmark" />
                                    </div> */}
                                    <input
                                        type="radio"
                                        id="card"
                                        name="payment"
                                        value='Card'
                                        checked={values.payment === 'Card'}
                                        onChange={changeHandler}
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/credit-card.png" alt="card" />
                                </div>
                                <div className={styles.innerPaymentType}>CARD</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label htmlFor="pay-pal">
                                    <input
                                        type="radio"
                                        id="pay-pal"
                                        name="payment"
                                        value="PayPal"
                                        checked={values.payment === 'PayPal'}
                                        onChange={changeHandler}
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/paypal.png" alt="pay-pal" />
                                </div>
                                <div className={styles.innerPaymentType}>PayPal</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label htmlFor="mobileWalet">
                                    <input
                                        type="radio"
                                        id="mobileWalet"
                                        name="payment"
                                        value="MobileWalet"
                                        checked={values.payment === 'MobileWalet'}
                                        onChange={changeHandler}
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/ewallet.png" alt="ewallet" />
                                </div>
                                <div className={styles.innerPaymentType}>Mobile <br></br>Walet</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label htmlFor="crypto">
                                    <input
                                        type="radio"
                                        id="crypto"
                                        name="payment"
                                        value="Crypto"
                                        checked={values.payment === 'Crypto'}
                                        onChange={changeHandler}
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/cryptowallet.png" alt="cryptowallet" />
                                </div>
                                <div className={styles.innerPaymentType}>Crypto</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label htmlFor="cash">
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="payment"
                                        value="Cash"
                                        checked={values.payment === 'Cash'}
                                        onChange={changeHandler}
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/money.png" alt="cash" />
                                </div>
                                <div className={styles.innerPaymentType}>Cash</div>

                            </div>

                        </div>

                        <div className={styles.privaciPolicy}>

                            <div className={styles.checkbox} onClick={onCheckPrivacyPolicy}>
                                {
                                    checkbox
                                        ?
                                        <img className={styles.tick} src="images/payment-icons/check.png" alt="checkmark" />
                                        :
                                        ''
                                }
                            </div>

                            <div className={styles.textPolicy}>*By ticking this box I agree that I have read the privacy policy</div>
                        </div>
                    </form>

                    <div className={styles.buttonsNextBack}>
                        <div className={styles.back}>
                            <ButtonBack backStep={backStep} page={'BACK'} />
                        </div>

                        <div className={styles.next}>
                            <div className={styles.bottomButtons}>
                                <div className={styles.nextStep}>
                                    <button onClick={savePersonalInformation} className={styles.nextButton} >NEXT</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div >
        </div >
    );
}