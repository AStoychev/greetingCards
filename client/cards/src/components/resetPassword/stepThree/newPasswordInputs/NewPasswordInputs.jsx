import styles from './NewPasswordInputs.module.css'

export const NewPasswordInputs = ({
    values,
    changeHandler
}) => {
    return (
        <div>
            <label className={styles.htmlContent} htmlFor="newPassword"></label>
            <div className={styles.loginInformation}>NEW PASSWORD<span>*</span></div>
            <input
                type="password"
                id="newPassword"
                placeholder="******"
                name="newPassword"
                value={values.newPassword}
                onChange={changeHandler}
            />

            <label className={styles.htmlContent} htmlFor="confirmNewPassword"></label>

            <div className={styles.loginInformation}>CONFIRM NEW PASSWORD<span>*</span></div>
            <input
                type="password"
                id="confirmNewPassword"
                placeholder="******"
                name="confirmNewPassword"
                value={values.confirmNewPassword}
                onChange={changeHandler}
            />
        </div>
    )
}