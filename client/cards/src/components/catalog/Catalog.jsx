export const Catalog = () => {
    return (
        <div className={styles.productContainer}>
            <div id="app" className="container">

                {/* <div>
                    <Search getDataFromSearch={getDataFromSearch} />
                </div> */}

                <CategoryNameDescription props={"All product"} />

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
                    {/* {items && items.map(item => (
                        < Card item={item} key={item.id} />
                    ))} */}
                </div>

                {!filtred &&
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
                }
            </div>
        </div>
    );
}
