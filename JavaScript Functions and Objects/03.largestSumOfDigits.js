function solve(args) {
    var input = args.split(', ').map(Number);
    var isPassed = checkPass(input);
    var result;

    if (isPassed) {
        result = findLargestBySumOfDigits(input);
    } else {
        result = 'undefined'
    }
    console.log(result);
}

function checkPass(input) {

    for (var i = 0; i < input.length; i++) {
        if (input[i] === NaN || !checkInteger(input)) {
            return false;
        }
    }
    return true;
}

function checkInteger(input) {
    var targetNumber;
    for (var i = 0; i < input.length; i++) {
        var currentNumber = input[i];
        targetNumber = Math.floor(currentNumber);

        if (currentNumber !== targetNumber) {
            return false;
        }
    }
    return true;
}

function findLargestBySumOfDigits(input) {
    var maxSum = 0;
    var maxSumNumber = '';
    for (var i = 0; i < input.length; i++) {
        var currentNumber = (Math.abs(input[i])).toString();
        var currentSum = 0;

        for (var j = 0; j < currentNumber.length; j++) {
            currentSum += parseInt(currentNumber[j])
        }

        if (maxSum < currentSum) {
            maxSum = currentSum;
            maxSumNumber = currentNumber;
        }
    }
    return maxSumNumber;
}

solve('5, 10, 15, 111');
solve('33, 44, -99, 0, 20');
solve('hello');
solve('5, 3.3');