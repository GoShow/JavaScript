function bitChecker(number) {
    var isOne = false;
    var bit = number & (1 << 3)

    if(bit !== 0) {
        isOne = true;
    }
    return isOne;
}
console.log(bitChecker(333));
console.log(bitChecker(425));
console.log(bitChecker(2567564754));