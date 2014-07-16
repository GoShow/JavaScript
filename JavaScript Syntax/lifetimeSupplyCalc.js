function calcSupply(age, maxAge, foodAmount, food) {
    var yearsToLive = maxAge - age;
    var daysInYear = 365;
    var wholeFoodAmount = yearsToLive * foodAmount * daysInYear;
    var result = wholeFoodAmount + 'kg of ' + food + ' will be enough until I am '+ maxAge + ' years old.';
    return result;
}
console.log(calcSupply(38, 118, 0.5, 'chocolate'));
console.log(calcSupply(20, 87, 2, 'fruits'));
console.log(calcSupply(16, 102, 1.1, 'nuts'));
