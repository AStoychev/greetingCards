import { AddCardForm } from "./addCardForm/AddCardForm";

import background from '../img/background.png'
import styles from "./AddCard.module.css"

export const AddCard = () => {

    return (
        <div className={styles.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={styles.innerContainer}>
                <div className={styles.mainField}>
                    <h1>Add Card</h1>
                    <div className={styles.innerColumn}>
                        <section id="card-page" className="content auth">
                            <AddCardForm />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
