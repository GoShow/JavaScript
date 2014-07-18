function findPalindromes(inputString) {
    var i;
    var j;
    var palindromes = [];
    var inputs = inputString.split(/[^a-zA-z]+/);

    for (i = 0; i < inputs.length - 1; i += 1) {
        var word = inputs[i];
        var reversedWord = '';

        for (j = word.length - 1; j >=0 ; j -= 1 ) {
            reversedWord += word[j];
        }

        if (reversedWord.toLowerCase() === word.toLowerCase()) {
           palindromes.push(word.toLowerCase());
        }
    }

    var outputs = palindromes.join(', ');

    console.log(outputs);
}
findPalindromes('There is a man, his name was Bob.');