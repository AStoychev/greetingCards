import styles from './AddToCardButton.module.css';

export const AddToCardButton = ({
    card,
}) => {

    const addToCart = (id) => {
        if (localStorage.getItem(`orders ${id}`) === null) {
            card['quantity'] = 1;
            localStorage.setItem(`orders ${id}`, JSON.stringify(card));
        }
        else {
            let localStorageItems = JSON.parse(localStorage.getItem(`orders ${id}`));

            let lastQuantity = localStorageItems['quantity']
            card['quantity'] = lastQuantity + 1;
            localStorage.removeItem(`orders ${id}`);
            localStorage.setItem(`orders ${id}`, JSON.stringify(card));
        }
    }

    return (
        <div className={styles.buttonWrapper}>
            <button onClick={() => addToCart(card._id)}>Add to Cart</button>
        </div>
    )
}