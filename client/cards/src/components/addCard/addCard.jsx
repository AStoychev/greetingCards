import { useContext } from "react";

import { useForm } from "../../hooks/useForm";
import { CardContext } from "../../contexts/CardContext";

export const AddCard = () => {

    const { onCreateCardSubmit } = useContext(CardContext);
    const { values, changeHandler, onSubmit } = useForm({
        title: '',
        description: '',
        price: '',
        discount: '',
        imageUrl: '',

    }, onCreateCardSubmit);

    return (
        <div className="container">
            <div>
                <h1>Regiter</h1>
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
                                <input className="submit" type="submit" value="Create" style={{ marginTop: "21px" }} />
                            </div>
                        </form>
                    </section>
                </div>

            </div>

        </div>
    );
}
