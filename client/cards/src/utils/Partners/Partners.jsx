import styles from './Partners.module.css'

export const Partners = () => {
    const partners = {
        imageParnersOne: "./images/partners.jpg",
        imageParnersTwo: "./images/partners.jpg",
        imageParnersThree: "./images/partners.jpg",
        imageParnersFour: "./images/partners.jpg",
        imageParnersFive: "./images/partners.jpg",
        imageParnersSix: "./images/partners.jpg",
        imageParnersSeven: "./images/partners.jpg",
    }

    return (
        <div className={styles.mainDivPartner}>
            <div className={styles.flexRow}>
                {Object.entries(partners).map((image, index) => (
                    <div className={styles.column} key={image[0]} ><img className={styles.imagPartners} src={image[1]} /></div>
                ))}
            </div>
        </div>
    );
}