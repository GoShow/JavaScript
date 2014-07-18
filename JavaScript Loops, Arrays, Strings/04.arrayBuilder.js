function createArray() {
    numbers = new Array(20);
    var i;

    for (i = 0; i < 20; i++) {
        numbers[i] = i * 5;
    }
    console.log(numbers);
}
createArray();