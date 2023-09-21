import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { useCardContext } from "../../contexts/CardContext";

import { useService } from "../../hooks/useService";
import { cardServiceFactory } from "../../services/cardService";

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

    }, onCardEditSubmit);

    useEffect(() => {
        cardService.getOne(cardId)
            .then(result => {
                changeValues(result);
            });
    }, [cardId]);

    // I don't know is good pratcice
    const setDiscount = () => {
        if(values.discount === "") {
            values.discount = 0;
        }
    }

    return (
        <div className="container">
            <div>
                <h1>Edit Card</h1>
                <div>
                    <section id="card-page" className="content auth">
                        <form id="card" method='POST' onSubmit={onSubmit}>
                            <div className='field-card'>

                                <label className='htmlContent' htmlFor="title">Title:</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Title"
                                    value={values.title}
                                    onChange={changeHandler}
                                />

                                <label className='htmlContent' htmlFor="description">Description:</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    placeholder="Description"
                                    value={values.description}
                                    onChange={changeHandler}
                                />
                                <label className='htmlContent' htmlFor="price">Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    id="card-price"
                                    placeholder="0.00"
                                    value={values.price}
                                    onChange={changeHandler}
                                />
                                <label className='htmlContent' htmlFor="discount">Discount:</label>
                                <input
                                    type="number"
                                    name="discount"
                                    id="discount"
                                    placeholder="0%"
                                    value={values.discount}
                                    onChange={changeHandler}
                                />
                                <label className='htmlContent' htmlFor="imageUrl">ImageURL:</label>
                                <input
                                    type="url"
                                    name="imageUrl"
                                    id="imageUrl"
                                    placeholder="https//"
                                    value={values.imageUrl}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="submit">
                                <input className="submit" type="submit" value="Create" onClick={setDiscount} style={{ marginTop: "21px" }} />
                            </div>
                        </form>
                    </section>
                </div>

            </div>

        </div>
    );
}
