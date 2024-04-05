import { showAllPurchase } from "./localStorageFunction/showAllPurchase"
import { checkForDiscount } from "./checkForDiscount";

export const totalPrice = () => {
    let price = 0;
    showAllPurchase().map((x) => {
        price += (checkForDiscount(x.price, x.discount) * x.quantity);
    });
    return price.toFixed(2)
}