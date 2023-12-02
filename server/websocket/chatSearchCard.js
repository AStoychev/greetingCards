const Card = require('../models/Card');

function findWord(word, str) {
    return str.split(' ').some(function (w) { return w.toLowerCase() === word })
}

exports.findCard = async (word) => {
    let findingCards = [];

    const allCards = await Card.find({});
    
    for(let i = 0; i < allCards.length; i++ ) {
        if(findWord(word, allCards[i].title)) {
            findingCards.push(allCards[i])
        }
        else if(findWord(word, allCards[i].description))
            findingCards.push(allCards[i])
    }
    
    return findingCards
}