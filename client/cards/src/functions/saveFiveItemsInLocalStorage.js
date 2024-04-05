export const saveFiveItemsInLocalStorage = (card) => {
    // This is code which add items last visited in local storage, put them time and if items are more than six code delete last item
    const items = [];
    const timeItems = [];
    let d = new Date();

    for (let i in { ...localStorage }) {
        if (JSON.parse(localStorage.getItem(i)).title) {
            timeItems.push(JSON.parse(localStorage.getItem(i)).time)
        }
    }

    let lastIndex = (Math.min.apply(Math, timeItems));

    const getLastItem = () => {
        let lastItem = ''
        for (let i in { ...localStorage }) {
            if (JSON.parse(localStorage.getItem(i)).time === lastIndex) {
                lastItem = JSON.parse(localStorage.getItem(i)).title
            }
        }
        return lastItem
    }

    for (let i in { ...localStorage }) {
        if (JSON.parse(localStorage.getItem(i)).title) {
            items.push(JSON.parse(localStorage.getItem(i)));
        }

        if (items.length >= 6) {
            getLastItem()
            localStorage.removeItem(getLastItem());
            for (let i in items) {
                if (items[i] === getLastItem()) {
                    items.splice(i, 1)
                }
            }
        }
    }

    if (card.title) {
        card['time'] = d.getTime()
        localStorage.setItem(card.title, JSON.stringify(card));
    }
    return items
}
