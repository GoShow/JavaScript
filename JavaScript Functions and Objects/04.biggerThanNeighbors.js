function solve(index, numbers) {

    console.log(biggerThanNeighbors(index, numbers));
}

function biggerThanNeighbors(index, numbers) {
    var result = ''
    if (index < 0 || index >= numbers.length) {
        result = 'invalid index'
    }

    else if (index === 0 || index === numbers.length - 1) {
        result = 'only one neighbor'
    }

    else {
        if (numbers[index] > numbers[index - 1] && numbers[index] > numbers[index + 1]) {
            result = 'bigger'
        }
        else {
            result = 'not bigger'
        }
    }
    return result;
}

solve(2, [1, 2, 3, 3, 5]);
solve(2, [1, 2, 5, 3, 4]);
solve(5, [1, 2, 5, 3, 4]);
solve(0, [1, 2, 5, 3, 4]);
