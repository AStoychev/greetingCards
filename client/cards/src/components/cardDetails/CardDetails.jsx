import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";

import { cardServiceFactory } from "../../services/cardService";
import { useCardContext } from "../../contexts/CardContext";

import { DeleteCardModal } from "../../utils/Modals/deleteModal/deleteCardModal";

import { checkForDiscount } from "../../functions/checkForDiscount";

import Magnifier from "react-magnifier";

import styles from './CardDetails.module.css'

export const CardDetails = () => {
    const [card, setCard] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [imageIndex, setImageIndex] = useState(0);
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

    const showClickedImege = (clickedImage, index) => {
        setImageIndex(Number(index))
        setMainImage(clickedImage)
    }

    const CheckForUdenfified = () => {
        let allImage = []
        for (let i in card.additionalImage) {
            if (card.additionalImage[i] != undefined) {
                allImage.push(
                    <div className={styles.bgPink} key={i}>
                        <img className={styles.otherPictures} onClick={() => showClickedImege(card.additionalImage[i], i)} src={card.additionalImage[i]} />
                    </div>
                )
            }
        }
        return allImage
    }

    const moveImage = (direction) => {
        if (card.additionalImage != undefined) {
            // console.log(card.additionalImage.length)
            if (direction === 'back') {
                if(imageIndex < 0) {
                    setImageIndex(card.additionalImage.length - 1)
                }
                setImageIndex(imageIndex - 1)
                setMainImage(card.additionalImage[imageIndex])
            }
        }
    }

    return (
        <div>
            <div className={styles.container}>
                {deleteModal}
                <h2>Details</h2>
                <div className={styles.columns3}>

                    <div className={styles.columnsLeft}>
                        <div className={styles.leftImages}>
                            <CheckForUdenfified />
                        </div>
                    </div>

                    <div className={styles.columnsCenter}>
                        <div className={styles.bgOrange}>

                            <div className={styles.leftBox}>
                                <button onClick={() => moveImage('back')}>{'<'}</button>
                            </div>

                            <div className={styles.middleBox}>
                                <Magnifier
                                    className={styles.mainImage}
                                    src={mainImage ? mainImage : card.imageUrl}
                                    width={422}
                                    height={610}
                                    zoomFactor={0.5}
                                    mgWidth={300}
                                    mgHeight={300}
                                    mgShape='circle'
                                />
                            </div>

                            <div className={styles.rigthBox}>
                                <button onClick={() => moveImage('prev')}>{'>'}</button>
                            </div>

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
        </div >
    );
}