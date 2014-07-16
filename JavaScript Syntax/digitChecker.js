function checkDigit(number) {
    var isThirdDigit3 = false;
    if ((Math.floor(number / 100)) % 10 == 3) {
        isThirdDigit3 = true;
    }
    return isThirdDigit3;
    return number;
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));
