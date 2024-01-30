export const showMakeOrderData = () => {
    const orderData = []
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith('makeOrder')) {
            let name = localStorage.key(i);
            orderData.push(JSON.parse(localStorage.getItem(name)))
        }
    }
    return orderData
}