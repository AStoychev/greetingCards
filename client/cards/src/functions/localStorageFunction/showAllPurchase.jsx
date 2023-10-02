export const showAllPurchase = () => {
    const allPurchase = []
    for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i).startsWith('orders')) {
            let name = localStorage.key(i);
            allPurchase.push(JSON.parse(localStorage.getItem(name)))
        }
    }
    return allPurchase
}