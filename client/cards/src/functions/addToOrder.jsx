export const addToOrder = () => {
    const filterOrders = [];
    for (let i = 0; i < localStorage.length; i++) {
        let allLocalStorageName = localStorage.key(i).split(' ');
        if (allLocalStorageName[0] === 'orders') {
            let name = allLocalStorageName.join(' ');
            console.log(localStorage.getItem(name));
        }
    }
    console.log(filterOrders)
}