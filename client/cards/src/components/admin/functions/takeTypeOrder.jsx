export const takeTypeOrder = (product, type) => {
    let orderType = [];
    for (let i in product) {
        if (product[i]['orderStatus'] === type) {
            orderType.push(product[i])
        }
    }
    return orderType
}