import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";

import { cardServiceFactory } from "../../services/cardService";
import { useCardContext } from "../../contexts/CardContext";

import { DeleteCardModal } from "../../utils/Modals/deleteModal/deleteCardModal";

import { checkForDiscount } from "../../functions/checkForDiscount";

import styles from './CardDetails.module.css'

export const CardDetails = () => {
    const [card, setCard] = useState([]);
    const cardIdObj = useParams();
    const cardId = cardIdObj.cardId
    const allCardsService = cardServiceFactory();
    const cardService = useService(cardServiceFactory);
    const navigate = useNavigate();
    const { deleteCard } = useCardContext();

    const [deleteModal, setDeleteModal] = useState()

    useEffect(() => {
        allCardsService.getOne(cardId)
            .then(result => {
                setCard(result)
            })
    }, []);

    const onLoadModal = (data) => {
        if (data === 'Yes') {
            deleteGreetinCard();
            setDeleteModal();
        }
        setDeleteModal();
    }

    const onDeleteClick = () => {
        setDeleteModal(<DeleteCardModal onLoadModal={onLoadModal} />)
    }

    const deleteGreetinCard = async () => {
        await cardService.deleteCard(cardId)
        deleteCard(cardId)
        navigate('/catalog')
    }

    return (
        <div>
            <div className={styles.container}>
                {deleteModal}
                <h2>Details</h2>
                <div className={styles.columns3}>

                    <div className={styles.columnsLeft}>
                        <div className={styles.leftImages}>
                            <div className={styles.bgPink}>
                                <img className={styles.otherPictures} src={card.imageUrl} />
                            </div>
                            <div className={styles.bgPink}>
                                <img className={styles.otherPictures} src={card.imageUrl} />
                            </div>
                            <div className={styles.bgPink}>
                                <img className={styles.otherPictures} src={card.imageUrl} />
                            </div>
                            <div className={styles.bgPink}>
                                <img className={styles.otherPictures} src={card.imageUrl} />
                            </div>
                            <div className={styles.bgPink}>
                                <img className={styles.otherPictures} src={card.imageUrl} />
                            </div>
                        </div>
                    </div>

                    <div className={styles.columnsCenter}>
                        <div className={styles.bgOrange}>
                            <img className={styles.mainImage} src={card.imageUrl} />
                        </div>
                    </div>

                    <div className={styles.columnsRight}>
                        <div className={styles.bgRed}>
                            <article>
                                <h3>{card.title}</h3>
                                <h3>{card.description}</h3>
                                <h3>Price: {card.discount !== 0 ? checkForDiscount(card.price, card.discount) : card.price} BGN</h3>
                            </article>
                        </div>
                        <button onClick={onDeleteClick}>Delete</button>
                        <Link to={`/catalog/${card._id}/edit`}>Edit</Link>
                    </div>

                </div>
            </div>
        </div>
    );
}