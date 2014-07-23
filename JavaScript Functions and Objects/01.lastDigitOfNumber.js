function solve(args) {
    var numberAsString = args.toString();
    console.log(lastDigitAsText(numberAsString));


}

function lastDigitAsText (numberAsString) {
    var digit = numberAsString[numberAsString.length - 1];
    var text = '';
    switch(digit) {
        case '0': text = 'Zero'; break;
        case '1': text = 'One'; break;
        case '2': text = 'Two'; break;
        case '3': text = 'Three'; break;
        case '4': text = 'Four'; break;
        case '5': text = 'Five'; break;
        case '6': text = 'Six'; break;
        case '7': text = 'Seven'; break;
        case '8': text = 'Eight'; break;
        case '9': text = 'Nine'; break;
    }

    return text;
}

solve(6);
solve(-55);
solve(133);
solve(14567);