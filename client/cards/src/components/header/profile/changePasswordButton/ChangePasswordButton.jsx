import styles from './ChangePasswordButton.module.css';

export const ChangePasswordButton = ({
    showChangePasswordMenu,
    accordion,
    arrow
}) => {
    return (
        <div className={styles.buttonWrapper}>
            <button onClick={() => showChangePasswordMenu(accordion)}>Change Password {arrow}</button>
        </div>
    )
}
