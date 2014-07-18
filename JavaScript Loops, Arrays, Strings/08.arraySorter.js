function sortArray(inputArray) {

    var len = inputArray.length,
        min;

    for (i = 0; i < len; i++) {

        //set minimum to this position
        min = i;

        //check the rest of the array to see if anything is smaller
        for (j = i + 1; j < len; j++) {
            if (inputArray[j] < inputArray[min]) {
                min = j;
            }
        }
        //if the minimum isn't in the position, swap it
        if (i != min) {
            swap(inputArray, i, min);
        }
    }

    var output = inputArray.join(', ');
    console.log(output);
}

function swap(inputArray, firstIndex, secondIndex) {
    var temp = inputArray[firstIndex];
    inputArray[firstIndex] = inputArray[secondIndex];
    inputArray[secondIndex] = temp;
}

sortArray([5, 4, 3, 2, 1]);
sortArray([12, 12, 50, 2, 6, 22, 51, 712, 6, 3, 3]);
