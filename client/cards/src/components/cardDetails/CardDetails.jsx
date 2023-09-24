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

    const [fiveArray, setFiveArray] = useState([])

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

    const showClickedImage = (clickedImage, slow) => {
        if (slow) {
            // Make ? to stop make indefOf error undefined
            setTimeout(() => setImageIndex(card.additionalImage?.indexOf(clickedImage) + 1), 300)
            // setTimeout(() => setImageIndex(card.additionalImage.indexOf(clickedImage) + 1), 300)
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

    // This function save in local storage visited item and data use for last visited items below of page
    const saveFiveItemInLocalStorage = () => {
        const items = [];

        for (let i in { ...localStorage }) {
            items.push(JSON.parse(localStorage.getItem(i)));
            if (items.length >= 6) {
                localStorage.removeItem(items[0].title);
                items.shift()
            }
        }
        if (card.title) {
            localStorage.setItem(card.title, JSON.stringify(card));
        }
        return items
    }

    // const saveFiveItemInLocalStorage = () => {
    //     const items = [];

    //     for (let i in { ...localStorage }) {
    //         items.push(JSON.parse(localStorage.getItem(i)));
    //         // for (let j in items) {
    //         //     fiveItemsId.push(items[j].id)
    //         // }
    //         if (items.length >= 6) {
    //             localStorage.removeItem(items[0].title);
    //             items.shift()
    //         }
    //     }
    //     if (card.title) {
    //         // card['id'] = Number(fiveItemsId.slice(-1)) + 1
    //         localStorage.setItem(card.title, JSON.stringify(card));
    //     }
    //     const fiveItemsId = [Number(items.length)]
    //     console.log(items.length)
    //     console.log(fiveItemsId)
    //     return items
    // }

    saveFiveItemInLocalStorage()


    // const saveInLocalStorage = () => {
    //     localStorage.setItem('visited', JSON.stringify([card]))
    //     let getString = localStorage.getItem('visited')
    //     let itemObject = JSON.parse(getString)
    //     console.log(111111111 , itemObject)

    //     for (let i in itemObject) {
    //         if (!Array.isArray(itemObject[i])) {
    //             console.log(itemObject[i])
    //         }
    //     }
    // }

    // saveInLocalStorage()

    return (
        <div>
            <div className={styles.container}>
                {deleteModal}
                <h2>Details</h2>
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
                                    // src={card.additionalImage ? card.additionalImage[imageIndex] : card.imageUrl}
                                    // src={mainImage ? mainImage : card.imageUrl}
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
                                {/* <h3>Price: {card.discount !== 0 ? checkForDiscount(card.price, card.discount) : card.price} BGN</h3> */}
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