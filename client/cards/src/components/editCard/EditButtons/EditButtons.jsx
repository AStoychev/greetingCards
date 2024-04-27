import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { validateAddCardFileds } from '../../../functions/validateAddAndEditFields';

import styles from './EditButtons.module.css';

export const EditButtons = ({
    setDiscount,
    cardId,
    values,
}) => {

    const [isNotValid, setIsNotValid] = useState(false);
    const navigate = useNavigate();

    const goBackToCard = (cardId) => {
        navigate(`/catalog/${cardId}`)
    }

    useEffect(() => {
        setIsNotValid(!validateAddCardFileds(values))
    })

    return (
        <div className={styles.buttonWrapper}>
            <button type="button" className={styles.buttonBack} onClick={() => goBackToCard(cardId)}>
                BACK
            </button>
            <input
                className={isNotValid ? styles.disabledSubmitBtn : styles.submitBtn}
                type="submit"
                value="SAVE"
                title={isNotValid ? 'Field all required fields!' : 'SAVE'}
                disabled={isNotValid}
                onClick={setDiscount}
            />
        </div>
    )
}