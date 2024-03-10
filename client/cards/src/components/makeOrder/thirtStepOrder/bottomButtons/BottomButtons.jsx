import { useNavigate } from 'react-router-dom';

import { ButtonBack } from '../../buttonBack/ButtonBack';

import styles from './BottomButtons.module.css';

export const BottomButtons = ({
    onClickSubmit,
}) => {
    const navigate = useNavigate();

    const backStep = () => {
        navigate('/make-second-step-order')
    }

    return (
        <div className={styles.bottomButtons}>
            <div className={styles.back}>
                <ButtonBack backStep={backStep} page={'BACK'} />
            </div>
            <div className={styles.next}>
                <div className={styles.nextStep}>
                    <button onClick={onClickSubmit} className={styles.nextButton}>FINISH</button>
                </div>
            </div>
        </div>
    )
}