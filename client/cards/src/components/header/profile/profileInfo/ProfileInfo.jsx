import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({
    userName,
    email
}) => {
    return (
        <div className={styles.infoWrapper}>
            <div className={styles.profileImage}>
                <img src='../../../images/user/myImage.jpg' alt='profi-image' />
            </div>
            <div className={styles.personalData}>

                <div className={styles.profileInfo}>
                    <p>First Name: {userName}</p>
                </div>
                <div className={styles.profileInfo}>
                    <p>Last Name: {userName}</p>
                </div>
                <div className={styles.profileInfo}>
                    <p>email: {email}</p>
                </div>

            </div>
        </div>
    )
}