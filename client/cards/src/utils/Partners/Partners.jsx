import styles from './Partners.module.css'

export const Partners = () => {
    return (
        <div className={styles.mainDivPartner}>
            <div className={styles.flexRow}>
                <div className={styles.column1}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column2}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column3}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column4}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column5}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column6}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
                <div className={styles.column7}><img className={styles.imagPartners} src='./images/partners.jpg'/></div>
            </div>
        </div>
    );
}