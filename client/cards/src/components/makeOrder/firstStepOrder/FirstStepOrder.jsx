import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { MapOrder } from "../../../utils/Modals/basketModal/MapOrder/MapOrder";
import { FinalPrice } from "../../../utils/Modals/basketModal/FinalPrice/FinalPrice";
import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";
import { ButtonNext } from "../buttonNext/ButtonNext";

import { showAllPurchase } from "../../../functions/localStorageFunction/showAllPurchase";
import { deletePurchase } from "../../../functions/localStorageFunction/deletePurchase";

import background from '../../img/background.png'
import styles from './FirstStepOrder.module.css'

export const FirstStepOrder = () => {
    // const ref = useRef(1);

    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/make-second-step-order')
    }

    return (
        <div className={styles.container} style={{backgroundImage: `url(${background})`}}>
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Your Order</div>
                <GraphicksOrder />
                
                <div className={styles.orderContainer}>
                    <MapOrder />
                    {
                        showAllPurchase().length === 0
                        &&
                        <div className={styles.emptyList}>Not purchase yet!</div>
                    }
                </div>

                <FinalPrice />
            </div>

            <ButtonNext nextStep={nextStep} page={'NEXT'}/>

            {/* <div className={styles.bottomButtons}>
                <div className={styles.nextStep}>
                    <button onClick={nextStep} className={styles.nextButton}>Next</button>
                </div>
            </div> */}

        </div>
    );
}
