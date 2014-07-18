function findMinAndMax(numbers) {
    numbers.sort(function (a, b){ return a > b});
    console.log('Min -> ' + numbers[0]);
    console.log('Max -> ' + numbers[numbers.length - 1]);
    console.log();
}
findMinAndMax([1, 2, 1, 15, 20, 5, 7, 3, 1]);
findMinAndMax([2, 2, 2, 2, 2]);
findMinAndMax([500, 1, -23, 0, -300, 28, 35, 12]);