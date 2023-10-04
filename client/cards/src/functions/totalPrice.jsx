import { showAllPurchase } from "./localStorageFunction/showAllPurchase"

export const totalPrice = () => {
    let price = 0;
    showAllPurchase().map((x) => {
        price += (x.price * x.quantity);
    });
    return price.toFixed(2)
}