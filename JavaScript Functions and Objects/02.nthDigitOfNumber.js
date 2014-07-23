function solve(args) {
    var n = args[0];
    var number = Math.abs(args[1]).toString();
    console.log(findNthDigit(n, number))
}

function findNthDigit(n, number) {
    var digit;
    number = removeFloatingPoint(number);

    if (number.length < n) {
        return 'The number doesn\'t have ' + n + ' digits';
    }
    digit = number[number.length - n];
    return digit;
}

function removeFloatingPoint(number) {
    var cleanNumber = '';

    for (var i = 0; i < number.length; i += 1) {

        if (number[i] === '.' || number[i] === ',') {
            continue;
        }
        cleanNumber += number[i];
    }
    return cleanNumber;
}

solve([1, 6]);
solve([2, -55]);
solve([6, 923456]);
solve([3, 1451.78]);
solve([6, 888.88]);