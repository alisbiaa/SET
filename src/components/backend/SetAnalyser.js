
export const checkSet = (c1, c2, c3) => {
    function isDistinct(a, b, c) {
        return (a !== b) && (a !== c) && (c !== b);
    }
    function isIdentical(a, b, c) {
        return (a === b) && (a === c);
    }

    function checkColor() {
        return isDistinct(c1.clr, c2.clr, c3.clr) || isIdentical(c1.clr, c2.clr, c3.clr);
    }

    function checkNum() {
        return isDistinct(c1.num, c2.num, c3.num) || isIdentical(c1.num, c2.num, c3.num);
    }

    function checkShade() {
        return isDistinct(c1.shade, c2.shade, c3.shade) || isIdentical(c1.shade, c2.shade, c3.shade);
    }

    function checkShape() {
        return isDistinct(c1.shape, c2.shape, c3.shape) || isIdentical(c1.shape, c2.shape, c3.shape)
    }
    return checkColor() && checkNum() && checkShade() && checkShape();
}

export const checkSetButton = ([...cards]) => {
    // let card1,card2,card3 ;
    let result = false ;
    cards.forEach(card1 => {
        cards.forEach(card2 => {
            if(card1 !== card2)
                cards.forEach(card3 => {
                    if(card3!== card1 && card3 !== card2) {
                        result = checkSet(card1,card2,card3) ;
                        if(result) return true ;
                    }
                })
        })
    })
    return result ;
}