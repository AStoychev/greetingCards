import styles from "./FirstSectionBanner.module.css";

export const FirstSectionBanner = ({
    goToShop,
    linkToImage,
    altToImage
}) => {
    return (
        <div className={styles.articleBanner}>
            <section className={styles.firstSection}>
                <div className={styles.bannerContainerOne}>
                    <div className={styles.bannerContent}>
                        <h1>Imagine a place...</h1>
                        <p>...where you can wish a loved one everything you feel for them</p>
                        <div className={styles}>
                            <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
                            <button className={styles.aboutButton}>ABOUT</button>
                        </div>
                    </div>
                    <div className={styles.bannerImage}>
                        <img className={styles.imageOne} src={linkToImage} alt={altToImage} />
                    </div>
                </div>
            </section>
        </div>
    )
}