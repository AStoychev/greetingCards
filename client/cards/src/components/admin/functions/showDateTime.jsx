export const showDateTime = (data) => {
    let dateTime = data.split('T');
    // Date
    let date = dateTime[0].split('-');
    let finalDate = `${date[2]}.${date[1]}.${date[0]}`;
    //Time
    let time = dateTime[1].split('.');
    let finalTime = time[0];

    return [finalDate, finalTime]
}