import { useNavigate } from 'react-router-dom';

import { MdHome } from "react-icons/md";
import styles from "./RedirectPageStepOne.module.css"

export const RedirectPageStepOne = () => {

    const navigate = useNavigate();

    const redirect = () => {
        navigate("/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h3>To reset your password!</h3>
                <h4>Please check you email!</h4>
                <div className={styles.homePageLink}><MdHome onClick={redirect} /></div>
            </div>
        </div>
    )
}