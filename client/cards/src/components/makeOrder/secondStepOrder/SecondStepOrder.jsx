import { GraphicksOrder } from "../../../utils/GraphicksOrder/GraphicksOrder";

import styles from './SecondStepOrder.module.css'

export const SecondStepOrder = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={styles.headerOrder}>Order Information</div>

                <GraphicksOrder />

                <div className={styles.dataContainer}>
                    <form>

                        <div className={styles.innerDivDataOrder}>
                            <label>First Name</label>
                            <input />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>Last Name</label>
                            <input />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>Email</label>
                            <input />
                        </div>

                        <div className={styles.innerDivDataOrder}>
                            <label>Phone Number</label>
                            <input />
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}