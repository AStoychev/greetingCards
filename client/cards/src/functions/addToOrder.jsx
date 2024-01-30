export const addToOrder = () => {
    const allOrder = {};
    const filterOrders = [];
    let totalPrice = 0;
    for (let i = 0; i < localStorage.length; i++) {
        let allLocalStorageName = localStorage.key(i).split(' ');
        if (allLocalStorageName[0] === 'orders') {
            let name = allLocalStorageName.join(' ');
            filterOrders.push(localStorage.getItem(name))
            // let items = localStorage.getItem(name);
            // let title = JSON.parse(items)._title;
            // allOrder['title'] = JSON.parse(items)
        }
    }


    for (let i in filterOrders) {
        let parsedItems = JSON.parse(filterOrders[i]);
        allOrder[parsedItems.title] = parsedItems;
        totalPrice += parsedItems.price
    }

    return filterOrders
    // return totalPrice.toFixed(2)
}