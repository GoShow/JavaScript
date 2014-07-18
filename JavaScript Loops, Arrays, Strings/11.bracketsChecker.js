function checkBrackets(inputString) {
    var i;
    var correctionString = 'correct'
    var bracketsCounter = 0;
    for (i = inputString.length - 1; i >= 0; i -= 1) {
        if (inputString[i] === '(') {
           bracketsCounter++;
        }  else if (inputString[i] === ')') {
            bracketsCounter--;
        }
    }

    if (bracketsCounter !== 0) {
        correctionString = 'incorrect';
    }
    console.log(correctionString);
}
checkBrackets('( ( a + b ) / 5 – d )');
checkBrackets(') ( a + b ) )');
checkBrackets('( b * ( c + d *2 / ( 2 + ( 12 – c / ( a + 3 ) ) ) )');