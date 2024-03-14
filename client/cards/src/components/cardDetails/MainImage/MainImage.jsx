import Magnifier from 'react-magnifier';

import styles from './MainImage.module.css';

export const MainImage = ({
    card,
    imageIndex,
    checkForIndentifiedImage,
}) => {
    return (
        <div className={styles.middleBox}>
            <Magnifier
                className={styles.mainImage}
                src={checkForIndentifiedImage() ? checkForIndentifiedImage()[imageIndex] : card.imageUrl}
                width={422}
                height={610}
                zoomFactor={0.5}
                mgWidth={300}
                mgHeight={300}
                mgShape='square'
            // mgShape='circle'
            />
        </div>
    )
}