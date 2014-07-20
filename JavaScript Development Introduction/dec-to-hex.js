window.onload = function decToHex () {
    var decNumber = parseInt(prompt('Enter a number'));
    var hexNumber = decNumber.toString(16).toUpperCase();
    alert(hexNumber);
}