import { useState, useContext } from "react";

import { useForm } from "../../hooks/useForm";

import { CardContext } from "../../contexts/CardContext";

import background from '../img/background.png'
import styles from "./AddCard.module.css"

export const AddCard = () => {
    const { onCreateCardSubmit } = useContext(CardContext);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        price: '',
        discount: '',
        imageUrl: '',
        additionalImageOne: '',
        additionalImageTwo: '',
        additionalImageThree: '',
        additionalImageFour: '',

    }, onCreateCardSubmit);
    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.innerContainer}>
                <div className={styles.mainField}>
                    <h1>Add Card</h1>
                    <div className={styles.innerColumn}>
                        <section id="card-page" className="content auth">
                            <form id="card" method='POST' onSubmit={onSubmit}>
                                <div className={styles.fieldCard}>

                                    <label className={styles.labelContent} htmlFor="title">Title:</label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        placeholder="Title"
                                        value={values.title}
                                        onChange={changeHandler}
                                    />

                                    <label className={styles.labelContent} htmlFor="description">Description:</label>
                                    <input
                                        type="text"
                                        id="description"
                                        name="description"
                                        placeholder="Description"
                                        value={values.description}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="price">Price:</label>
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
                                        value={values.discount}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="imageUrl">ImageURL:</label>
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
                                        value={values.additionalImageOne}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageTwo">Aditional Image Two:</label>
                                    <input
                                        type="url"
                                        name="additionalImageTwo"
                                        id="additionalImageTwo"
                                        placeholder="https//"
                                        value={values.additionalImageTwo}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageThree">Aditional Image Three:</label>
                                    <input
                                        type="url"
                                        name="additionalImageThree"
                                        id="additionalImageThree"
                                        placeholder="https//"
                                        value={values.additionalImageThree}
                                        onChange={changeHandler}
                                    />
                                    <label className={styles.labelContent} htmlFor="additionalImageFour">Aditional Image Four:</label>
                                    <input
                                        type="url"
                                        name="additionalImageFour"
                                        id="additionalImageFour"
                                        placeholder="https//"
                                        value={values.additionalImageFour}
                                        onChange={changeHandler}
                                    />
                                    {/* Additional Image */}
                                </div>
                                <div className="submit">
                                    <input className={styles.submitBtn} type="submit" value="Create" style={{ marginTop: "21px" }} />
                                </div>
                            </form>
                        </section>
                    </div>
                </div>

            </div>

        </div>
    );
}
