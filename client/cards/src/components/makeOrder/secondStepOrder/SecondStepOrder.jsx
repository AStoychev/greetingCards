import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";
import { ButtonNext } from "../buttonNext/ButtonNext";

import styles from './SecondStepOrder.module.css'

export const SecondStepOrder = () => {
    const [checkbox, setCheckbox] = useState('');
    
    const navigate = useNavigate();

    const onCheckPrivacyPolicy = () => {
        if (checkbox === '') {
            setCheckbox(1)
        }
        else if (checkbox === 1) (
            setCheckbox('')
        )
    }

    const nextStep = () => {
        navigate('/make-thirth-step-order')
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
                                <label>FIRST*</label>
                                <input
                                    type="first"
                                    id="first"
                                    name="first"
                                />
                            </div>

                            <div className={styles.innerDivDataOrderName}>
                                <label>LAST*</label>
                                <input
                                    type="last"
                                    id="last"
                                    name="last"
                                />
                            </div>
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>EMAIL*</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>NUMBER*</label>
                            <input
                                type="phone"
                                id="phone"
                                name="phone"
                            />
                        </div>

                        <div className={styles.innerLineOne}>
                            <div className={styles.lineOne}></div>
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>CITY*</label>
                            <input
                                type="city"
                                id="city"
                                name="city"
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>POST CODE*</label>
                            <input
                                type="post-code"
                                id="post-code"
                                name="post-code"
                            />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>ADDRESS*</label>
                            <input
                                type="address"
                                id="address"
                                name="address"
                            />
                        </div>

                        <div className={styles.innerLineOne}>
                            <div className={styles.lineOne}></div>
                        </div>

                        <div className={styles.choosePaymentMehod}>CHOOSE PAYMENT METHOD</div>

                        <div className={styles.typePayment}>
                            <div className={styles.innerDivPayment}>
                                <label>
                                    {/* <div className={styles.emptyCircleButton}>
                                        <img className={styles.tick} src="images/payment-icons/check.png" alt="checkmark" />
                                        <img className={styles.tick} src="images/payment-icons/checkmark.png" alt="checkmark" />
                                    </div> */}
                                    <input
                                        type="radio"
                                        value="card"
                                        id="card"
                                        name="payment"
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/credit-card.png" alt="card" />
                                </div>
                                <div className={styles.innerPaymentType}>CARD</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label>
                                    <input
                                        type="radio"
                                        value="PayPal"
                                        id="pay-pal"
                                        name="payment"
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/paypal.png" alt="pay-pal" />
                                </div>
                                <div className={styles.innerPaymentType}>PayPal</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label>
                                    <input
                                        type="radio"
                                        value="mobileWalet"
                                        id="mobileWalet"
                                        name="payment"
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/ewallet.png" alt="ewallet" />
                                </div>
                                <div className={styles.innerPaymentType}>Mobile <br></br>Walet</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label>
                                    <input
                                        type="radio"
                                        value="crypto"
                                        id="crypto"
                                        name="payment"
                                    />
                                </label>

                                <div className={styles.logoPayment}>
                                    <img src="images/payment-icons/cryptowallet.png" alt="cryptowallet" />
                                </div>
                                <div className={styles.innerPaymentType}>Crypto</div>

                            </div>

                            <div className={styles.innerDivPayment}>
                                <label>
                                    <input
                                        type="radio"
                                        value="cash"
                                        id="cash"
                                        name="payment"
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

                    <ButtonNext nextStep={nextStep}/>
                </div>
            </div>
        </div>
    );
}