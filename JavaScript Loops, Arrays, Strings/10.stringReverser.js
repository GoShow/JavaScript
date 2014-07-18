function reverseString(inputString) {
    var i;
    var reversedString = "";
    for (i = inputString.length - 1; i >= 0; i -= 1) {
        reversedString += inputString[i];
    }
    console.log(reversedString);
}
reverseString('sample');
reverseString('softUni');
reverseString('java script');