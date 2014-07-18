function printNumbers(number) {
    var i = 0;
    var numbers = [];
    for (i = 0; i <= number; i += 1) {

        if (i % 5 === 0 || i % 4 === 0) {
            continue;
        }
        numbers.push(i);
    }
    if(numbers.length === 0){
        numbers[0] = 'no';
    }
    var output = numbers.join(', ');
    console.log(output);
}
printNumbers(20);
printNumbers(-5);
printNumbers(13);
