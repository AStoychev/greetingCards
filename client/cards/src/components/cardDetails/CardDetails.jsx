import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";

import { cardServiceFactory } from "../../services/cardService";
import { useCardContext } from "../../contexts/CardContext";

import { DeleteCardModal } from "../../utils/Modals/deleteModal/deleteCardModal";

import { saveFiveItemsInLocalStorage } from "../../functions/saveFiveItemsInLocalStorage";
import { checkForDiscount } from "../../functions/checkForDiscount";

import Magnifier from "react-magnifier";

import styles from './CardDetails.module.css'

export const CardDetails = () => {
    const [card, setCard] = useState([]);

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
        // Have to delete also card from localStorage
        localStorage.removeItem(card.title)
        navigate('/catalog')
    }

    const showClickedImage = (clickedImage, slow) => {
        if (slow) {
            // Make ? to stop make indefOf error undefined
            setTimeout(() => setImageIndex(card.additionalImage?.indexOf(clickedImage) + 1), 300)
        } else {
            setImageIndex(card.additionalImage.indexOf(clickedImage) + 1)
        }
    }

    // Put border on mainImage in additional image field
    const aroundWithBorder = (image) => {
        if (image === checkForIndetifiedImage()[imageIndex]) {
            return 'solid'
        } else {
            return ""
        }
    }
    // Put border on mainImage in additional image field

    const checkForIndetifiedImage = () => {
        let images = []
        images.push(card.imageUrl)
        for (let i in card.additionalImage) {
            if (card.additionalImage[i] !== null) {
                images.push(card.additionalImage[i])
            }
        }
        return images
    }

    const AdditionalImages = () => {
        let additionalImages = []

        checkForIndetifiedImage().map(image => {
            additionalImages.push(
                <div className={styles.bgPink} key={additionalImages.length}>
                    <img className={styles.otherPictures} style={{ border: aroundWithBorder(image) }} onClick={() => showClickedImage(image)} onMouseEnter={() => showClickedImage(image, 'slow')} src={image} />
                </div>
            )
        })
        return additionalImages
    }

    const moveImageBack = () => {
        // Remove index -1 after length because add +1 in showClickedImage
        if (imageIndex <= 0) {
            setImageIndex(card.additionalImage.length);
        } else {
            setImageIndex(imageIndex - 1);
        }
    }

    const moveImagePrev = () => {
        // Remove index -1 after length because add +1 in showClickedImage
        if (imageIndex >= card.additionalImage.length) {
            setImageIndex(0);
        } else {
            setImageIndex(imageIndex + 1);
        }
    }

    saveFiveItemsInLocalStorage(card)

    return (
        <div>
            <div className={styles.container}>
                {deleteModal}
                <div className={styles.header}>
                    <h2>Details</h2>
                </div>
                <div className={styles.columns3}>

                    <div className={styles.columnsLeft}>
                        <div className={styles.leftImages}>
                            <AdditionalImages />
                        </div>
                    </div>

                    <div className={styles.columnsCenter}>
                        <div className={styles.bgOrange}>

                            <div className={styles.leftBox}>
                                {checkForIndetifiedImage().length > 1 &&
                                    <div>
                                        <button className={styles.changeImageButtonBack} onClick={moveImageBack}>{'<'}</button>
                                    </div>
                                }
                            </div>

                            <div className={styles.middleBox}>
                                <Magnifier
                                    className={styles.mainImage}
                                    src={checkForIndetifiedImage() ? checkForIndetifiedImage()[imageIndex] : card.imageUrl}
                                    width={422}
                                    height={610}
                                    zoomFactor={0.5}
                                    mgWidth={300}
                                    mgHeight={300}
                                    mgShape='square'
                                // mgShape='circle'
                                />
                            </div>

                            <div className={styles.rigthBox}>
                                {checkForIndetifiedImage().length > 1 &&
                                    < button className={styles.changeImageButtonPrev} onClick={moveImagePrev}>{'>'}</button>
                                }
                            </div>

                        </div>
                    </div>

                    <div className={styles.columnsRight}>
                        <div className={styles.bgRed}>
                            <article className={styles.rightColumnArticle}>
                                <h3>{card.title}</h3>
                                <h3>{card.description}</h3>
                                <h3>Price: {checkForDiscount(card.price, card.discount)} BGN</h3>
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