function isPrime(number) {
    var isPrime = true;
    for(i = 2; i < Math.sqrt(number); i++) {
        if(number % i == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));