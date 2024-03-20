import { Graphic } from './graphic/Graphic';

import styles from './GraphicksOrder.module.css'

export const GraphicksOrder = () => {

    return (
        <div className={styles.graphicInnerContainer}>
            <Graphic />
        </div>
    );
}
