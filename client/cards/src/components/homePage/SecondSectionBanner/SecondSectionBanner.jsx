import styles from './SecondSectionBanner.module.css'

export const SecondSectionBanner = ({
    goToShop,
    linkToImage,
    altToImage
}) => {
    return (
        <div className={styles.articleBanner}>
            <section className={styles.secondSection}>
                <div className={styles.bannerContainer}>

                    <div className={styles.bannerImage}>
                        <img className={styles.animatedBox} src={linkToImage} alt={altToImage} />
                    </div>

                    <div className={styles.bannerContent}>
                        <h1>Imagine a box...</h1>
                        <p>...full of beautiful wishes</p>
                        <div className={styles}>
                            <button className={styles.shopNowButton} onClick={goToShop}>SHOP NOW</button>
                            <button className={styles.aboutButton}>ABOUT</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}