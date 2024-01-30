export const changeColorOfStatus = (order) => {
    if (order === 'Unprocessed') {
        return '#ff0000'
    }
    else if (order === 'Send') {
        return '#418a30'
    }
    else if (order === 'Received') {
        return '#8f8503'
    }
    else if (order === 'Returned') {
        return '#2504db'
    }
}