function replaceSpaces(inputString) {
    var i;
    var spacelessString = '';
    var replacedSpacesString = '';
    for (i = 0; i < inputString.length; i += 1) {
        if (inputString[i] === ' ') {
            replacedSpacesString += '&nbsp;'
        }
        else {
            spacelessString += inputString[i];
            replacedSpacesString += inputString[i];
        }
    }
    console.log('To look like the output: ' + spacelessString);
    console.log('Probably the correct answer is : ' + replacedSpacesString);
}

replaceSpaces("But you were living in another world tryin' to get your message through");