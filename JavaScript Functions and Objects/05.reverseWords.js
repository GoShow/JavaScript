function solve(args) {
    var words = args.split(' ');
    var result = '';

    for (var i = 0; i < words.length; i++) {
        result += reverseWordsInString(words, i) + ' ';
    }

    console.log(result);
}

function reverseWordsInString(words, number) {
    var currentWord = words[number];
    var reversedWord = '';
    for (var i = currentWord.length - 1; i >= 0; i -= 1) {
        reversedWord += currentWord[i];
    }
    return reversedWord;
}

solve('Hello, how are you.');
solve('Life is pretty good, isn’t it?')