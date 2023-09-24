export const checkForDiscount = (price, discount) => {
    if (discount) {
        const discountPrice = (discount / 100);
        const finalPrice = price - (price * discountPrice);
        return finalPrice.toFixed(2)
    } else {
        return price?.toFixed(2)
    }
}