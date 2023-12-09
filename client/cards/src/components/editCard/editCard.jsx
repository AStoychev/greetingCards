import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useCardContext } from "../../contexts/CardContext";

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

    // Empty input string solve idea
    const checkForEmptyInput = (data) => {
        if (!data) {
            return data = '';
        } else {
            return data;
        }
    }

    const validateImageUrl = (url) => {
        let regex = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
        return regex.test(url)
    }

    const validateAddCardFileds = () => {
        if (values.title.length >= 2
            &&
            values.description.length >= 10
            &&
            values.price > 0
            &&
            validateImageUrl(values.imageUrl)) {
            return true
        } else {
            return false
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
                                <div className={styles.fieldCard}>

                                    <label className={styles.labelContent} htmlFor="title">Title:<span>*</span></label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                        value={values.title}
                                        onChange={changeHandler}
                                    />

                                    <label className={styles.labelContent} htmlFor="description">Description:<span>*</span></label>
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        placeholder="Description"
                                        value={values.description}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="price">Price:<span>*</span></label>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        placeholder="0.00"
                                        value={values.price}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="discount">Discount:</label>
                                    <input
                                        type="number"
                                        name="discount"
                                        id="discount"
                                        placeholder="0%"
                                        value={checkForEmptyInput(values.discount)}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="imageUrl">ImageURL:<span>*</span></label>
                                    <input
                                        type="url"
                                        name="imageUrl"
                                        id="imageUrl"
                                        placeholder="https//"
                                        value={values.imageUrl}
                                        onChange={changeHandler}
                                    />
                                    {/* Additional Image */}
                                    <label className={styles.labelContent} htmlFor="additionalImageOne">Aditional Image One:</label>
                                    <input
                                        type="url"
                                        name="additionalImageOne"
                                        id="additionalImageOne"
                                        placeholder="https//"
                                        value={checkForEmptyInput(values.additionalImageOne)}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageTwo">Aditional Image Two:</label>
                                    <input
                                        type="url"
                                        name="additionalImageTwo"
                                        id="additionalImageTwo"
                                        placeholder="https//"
                                        value={checkForEmptyInput(values.additionalImageTwo)}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageThree">Aditional Image Three:</label>
                                    <input
                                        type="url"
                                        name="additionalImageThree"
                                        id="additionalImageThree"
                                        placeholder="https//"
                                        value={checkForEmptyInput(values.additionalImageThree)}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageFour">Aditional Image Four:</label>
                                    <input
                                        type="url"
                                        name="additionalImageFour"
                                        id="additionalImageFour"
                                        placeholder="https//"
                                        value={checkForEmptyInput(values.additionalImageFour)}
                                        onChange={changeHandler}
                                    />
                                    {/* Additional Image */}
                                </div>
                                <div className="submit">
                                    <input
                                    className={!validateAddCardFileds() ? styles.disabledSubmitBtn : styles.submitBtn}
                                    type="submit"
                                    value="Edit"
                                    onClick={setDiscount}
                                    />
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

        </div>
    );
}
