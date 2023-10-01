import { useState, useEffect, useContext } from "react";
import { CardContext } from "../../contexts/CardContext";

import { useCardContext } from "../../contexts/CardContext";
import { cardServiceFactory } from "../../services/cardService";

import { Basket } from "../header/basket/Basket";
import { Cards } from "../../utils/Cards/CatalogCards/Cards";

import { SaveLastFiveVisitedCards } from "../SaveInLocalStorage/SaveLastFiveVisitedCards";
import styles from './Catalog.module.css'

export const Catalog = () => {
    const [allCards, setAllCards] = useState([]);
    const allCardsService = cardServiceFactory();

    useEffect(() => {
        allCardsService.getAll()
            .then(result => {
                setAllCards(result)
            })
    }, [])

    return (
        <div className={styles.productContainer}>
            {/* <Basket /> */}
            <div id="app" className="container">

                {/* <div>
                    <Search getDataFromSearch={getDataFromSearch} />
                </div> */}

                {/* <CategoryNameDescription props={"All product"} /> */}

                <div className={styles.productAndSortItem}>
                    <div className={styles.columnOne}>
                        {/* <Filter
                            handleClose={handleClose}
                            handleShow={handleShow}
                            lgShow={lgShow}
                            filtredItem={filtredItem}
                            AccordionFilter={AccordionFilter}
                            onBrandChange={onBrandChange}
                            certificate={certificate}
                            onCertificateChange={onCertificateChange}
                            price={price}
                            onPriceChange={onPriceChange} onFilter={onFilter}
                        /> */}
                    </div>
                    <div className={styles.columnTwo}>
                        {/* <DropdownSort sortAlphabetically={sortAlphabetically} sortByPrice={sortByPrice} items={items} /> */}
                    </div>
                </div>

                {/* <ProductsCounter items={items} /> */}

                <div className={styles.grid}>
                    {allCards && allCards.map(card => (
                        < Cards card={card} key={card._id} />
                    ))}
                </div>

                {/* {!filtred &&
                    <div className={styles.buttonDiv}>
                        {page < totalPage
                            ? (
                                <button className={styles.loadMoreButton} onClick={() => setPage(page + 1)}>
                                    Load More
                                </button>
                            )
                            :
                            <div className={styles.noMoreProduct}>
                                No More Products
                            </div>
                        }
                    </div>
                } */}
                < SaveLastFiveVisitedCards />
            </div>
        </div>
    );
}
