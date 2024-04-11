import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useCardContext } from "../../contexts/CardContext";

import { FieldCard } from "./FieldCard/FieldCard";
import { EditButtons } from "./EditButtons/EditButtons";

import { useService } from "../../hooks/useService";
import { cardServiceFactory } from "../../services/cardService";

import background from '../img/background.png'
import styles from "../addCard/AddCard.module.css"

export const EditCard = () => {

    const { onCardEditSubmit } = useCardContext();
    const cardIdObj = useParams();
    const cardId = cardIdObj.cardId;
    const cardService = useService(cardServiceFactory);

    const { values, changeHandler, onSubmit, changeValues } = useForm({
        title: '',
        description: '',
        price: '',
        discount: '',
        imageUrl: '',
        additionalImageOne: '',
        additionalImageTwo: '',
        additionalImageThree: '',
        additionalImageFour: '',

    }, onCardEditSubmit);

    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                changeValues(result);
            });
    }, [cardId]);

    // I don't know is good pratcice
    const setDiscount = () => {
        if (values.discount === "") {
            values.discount = 0;
        }
    }

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.innerContainer}>
                <div className={styles.mainField}>
                    <h1>Edit Card</h1>
                    <div className={styles.innerColumn}>
                        <section id="card-page" className="content auth">
                            <form id="card" method='POST' onSubmit={onSubmit}>
                                <FieldCard changeHandler={changeHandler} values={values}/>
                                <EditButtons setDiscount={setDiscount} cardId={cardId} values={values} />
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
