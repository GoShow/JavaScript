function evenNumber(number) {
    var isEven = false;
    if(number % 2 === 0){
        isEven = true;
    }
    return isEven;
}
console.log(evenNumber(3));
console.log(evenNumber(127));
console.log(evenNumber(588));