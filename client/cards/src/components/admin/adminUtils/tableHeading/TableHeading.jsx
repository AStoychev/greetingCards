import styles from './TableHeading.module.css'

export const TableHeading = () => {
    return (
        <div className={styles.tableRowHeading}>
            <div className={styles.rowItem}>#</div>
            <div className={styles.rowItem}>ID</div>
            <div className={styles.rowItem}>Date</div>
            <div className={styles.rowItem}>Address</div>
            <div className={styles.rowItem}>Client</div>
            <div className={styles.rowItem}>Shipping</div>
            <div className={styles.rowItem}>Payment</div>
            <div className={styles.rowItem}>Price</div>
            <div className={styles.rowItem}>Status</div>
            <div className={styles.rowItem}>Message</div>
            <div className={styles.rowItem}>Order</div>
            <div className={styles.rowItem}>Action</div>
        </div>
    )
}