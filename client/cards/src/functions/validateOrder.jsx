export const validateOrder = (order) => {
    if (
        order.firstName?.length <= 0 ||
        order.lastName?.length <= 0 ||
        order.email?.length <= 0 ||
        order.phoneNumber?.length <= 0 ||
        order.shippingCompany?.length <= 0 ||
        order.shippingPlace?.length <= 0 ||
        order.city?.length <= 0 ||
        order.postCode?.length <= 0 ||
        order.address?.length <= 0 ||
        order.orders?.length <= 0 ||
        // order.takeMessage?.length <= 0 ||
        order.payment?.length <= 0
        // order.privacyPolicy?.lengt <= 0
    ) {
        return false
    }
    else {
        return true
    }
    
}
