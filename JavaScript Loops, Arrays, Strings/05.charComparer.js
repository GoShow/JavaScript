function compareChars(firstArray, secondArray) {

    var compareString = 'Equal';
    var i;

    if (firstArray.length !== secondArray.length) {
        compareString = 'Not Equal';
    } else {

        for (i = 0; i < firstArray.length; i += 1) {
            if (firstArray[i] !== secondArray[i]) {
                compareString = 'Not Equal';
                break;
            }
        }
    }
    console.log(compareString);
}

compareChars(['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q'], ['1', 'f', '1', 's', 'g', 'j', 'f', 'u', 's', 'q']);
compareChars(['3', '5', 'g', 'd'], ['5', '3', 'g', 'd']);
compareChars(['q', 'g', 'q', 'h', 'a', 'k', 'u', '8', '}', 'q', '.', 'h', '|', ';'],
    ['6', 'f', 'w', 'q', ':', '”', 'd', '}', ']', 's', 'r']);