const num = [1, 2, 3];
const shape = ["moon", "wave" , "square"];
const shading = ["empty", "hashed", "filled"];
const color = ["red", "orange", "green"];


export const createDeck = (difficulty) => {
    let advancedDeck = []; // 81 card
    let startDeck = []; // 27 card

    let i = 0, j = 0;
    for (let n of num)
        for (let s of shape)
            for (let sh of shading)
                for (let c of color) {
                    advancedDeck.push({num: n, shape: s, shade: sh, clr: c, index: i});
                    i++;
                }
    for (let n of num) {
        for (let sh of shape)
            for (let c of color) {
                startDeck.push({num: n, shape: sh, shade: "filled", clr: c, index: j});
                j++;
            }
    }
    if (difficulty === "starter") return shuffleDeck(startDeck);
    else if (difficulty === "advanced") return shuffleDeck(advancedDeck);
}

let shuffleDeck = (deck) => {
    let currentIndex = deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = deck[currentIndex];
        deck[currentIndex] = deck[randomIndex];
        deck[randomIndex] = temporaryValue;
    }
    return deck;
}



