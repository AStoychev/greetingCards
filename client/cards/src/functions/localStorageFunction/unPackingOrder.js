import { showMakeOrderData } from "./showMakeOrderData";

export const unPackingOrder = () => {
    const peronalData = [];
    if (showMakeOrderData()) {
        showMakeOrderData().map((x) => {
            peronalData.push(
                x.firstName, x.lastName, x.email,
                x.phoneNumber, x.shippingCompany,
                x.shippingPlace, x.city, x.postCode,
                x.address,x.orders, x.takeMessage,
                x.payment, x.privacyPolicy
            )
        })
    }
    return peronalData
}