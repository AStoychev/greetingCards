export const validateImageUrl = (url) => {
    let regex = /https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return regex.test(url)
}

export const validateAddCardFileds = (value) => {
    if (value.title.length >= 2
        &&
        value.description.length >= 10
        &&
        value.price > 0
        &&
        validateImageUrl(value.imageUrl)) {
        return true
    } else {
        return false
    }
}