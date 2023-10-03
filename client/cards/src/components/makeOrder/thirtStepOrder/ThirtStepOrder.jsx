import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";

import styles from './ThirtStepOrder.module.css'

export const ThirtStepOrder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Complete Your Order</div>
                <GraphicksOrder />
            </div>
        </div>
    );
}