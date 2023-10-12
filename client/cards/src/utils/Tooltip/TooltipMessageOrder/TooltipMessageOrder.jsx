import { useState } from 'react';

import styles from './TooltipMessageOrder.module.css'

export const TooltipMessageOrder = ({
    text,
    children
}) => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className={styles.tooltipContainer}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}
            {isVisible && <div className={styles.tooltip}>{text}</div>}

        </div>
    );
}