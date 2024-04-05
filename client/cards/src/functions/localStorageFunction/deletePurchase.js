export const deletePurchase = (e) => {
    let item = e.target.alt
    for (let i = 0; i < localStorage.length; i++) {
        let deletePurchase = localStorage.key(i).split(' ');
        let id = deletePurchase.pop()
        if (item === id) {
            localStorage.removeItem(`orders ${item}`)

            // setBinHover is used for direct hide deleted elemene can make other way but at the moment it s works
            // setBinHover(0)
        }
    }
}