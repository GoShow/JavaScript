function indCardFrequency(inputString) {
    var cards = inputString.split(' ');
    var cardsFaces = [];
    var cardsAppearance = [];
    var i;
    for (i = 0; i < cards.length; i += 1) {
        var currentCard = cards[i];
        var cardFace = currentCard[0];
        var cardCounter = 0;

        //check if array contains cardFace
        if (cardsFaces.indexOf(cardFace) > -1) {
            continue;
        }
        cardsFaces.push(cardFace);

        for (var j = i; j < cards.length; j++) {
            var targetCard = cards[j];
            var targetCardFace = targetCard[0];

            if (targetCardFace === cardFace) {
                cardCounter += 1;
            }
        }
        cardsAppearance.push(cardCounter);
    }

    for (i = 0; i < cardsFaces.length; i += 1) {
        var percentage = (cardsAppearance[i] / cards.length * 100).toFixed(2);

        //if cardFace is '1' the card is 10 so print 10 :)
        if (cardsFaces[i] === '1') {
            console.log('10 -> ' + percentage + '%');

        } else {
            console.log(cardsFaces[i] + ' -> ' + percentage + '%');
        }
    }

    console.log();

    //my first solution with objects but sorted not in the appearance order
    /* var input = inputString.split(' ');
     var cards = {};
     var i;
     for (i = 0; i < input.length; i += 1) {
     var currentCard = input[i];
     var currentKey = currentCard[0];
     var cardAppearance = 1;

     if (currentKey === '1') {
     currentKey = '10'
     }
     if (cards[currentKey] !== undefined) {
     cardAppearance += cards[currentKey];
     }
     cards[currentKey] = cardAppearance;
     }
     for (var card in cards) {
     var persentage = (cards[card] / input.length * 100).toFixed(2);
     console.log(card + ' -> ' + persentage);
     }*/
}

indCardFrequency('8♥ 2♣ 4♦ 10♦ J♥ A♠ K♦ 10♥ K♠ K♦');
indCardFrequency('J♥ 2♣ 2♦ 2♥ 2♦ 2♠ 2♦ J♥ 2♠');
indCardFrequency('10♣ 10♥');