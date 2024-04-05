export const deleteAllDataPurchaseAfterSendOrder = () => {
    //Use this function because with for loop localStorage don't delete all items
    localStorage.removeItem('makeOrder');
    const items = []
    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);
        if (name.startsWith('orders')) {
            items.push(name)
        }
    }
    items.forEach(function (key) {
        localStorage.removeItem(key)
    })
}
