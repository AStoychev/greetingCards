import styles from './Graphic.module.css';

export const Graphic = () => {
    const changeCubeAntTextColor = (step) => {
        const data = { '/make-first-step-order': 1, '/make-second-step-order': 2, '/make-thirth-step-order': 3 };
        const urlStep = window.location.pathname;

        let key = (data[`${urlStep}`]);

        if (key === step) {
            return ['#1b9e22', 'rgb(255, 255, 255)']
        }
        else {
            return ['rgb(255, 255, 255)', 'rgb(0, 0, 0)']
        }
    }
    
    return (
        <div className={styles.lineOrderGraphic}>
            <div className={styles.cubeOne} style={{ backgroundColor: `${changeCubeAntTextColor(1)[0]}` }}>
                <div className={styles.innerCubeText} style={{ color: `${changeCubeAntTextColor(1)[1]}` }}>1</div>
            </div>

            <div className={styles.innerLineOne}>
                <div className={styles.lineOne}></div>
            </div>

            <div className={styles.cubeOne} style={{ backgroundColor: `${changeCubeAntTextColor(2)[0]}` }}>
                <div className={styles.innerCubeText} style={{ color: `${changeCubeAntTextColor(2)[1]}` }}>2</div>
            </div>

            <div className={styles.innerLineOne}>
                <div className={styles.lineOne}></div>
            </div>

            <div className={styles.cubeOne} style={{ backgroundColor: `${changeCubeAntTextColor(3)[0]}` }}>
                <div className={styles.innerCubeText} style={{ color: `${changeCubeAntTextColor(3)[1]}` }}>3</div>
            </div>
        </div>
    )
}