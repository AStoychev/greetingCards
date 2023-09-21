export const checkForDiscount = (price, discount) => {
    const discountPrice = (discount / 100);
    const finalPrice = price - (price * discountPrice);
    return finalPrice
}