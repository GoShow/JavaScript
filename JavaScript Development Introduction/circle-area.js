function calcCircleArea (event) {
    event.preventDefault();
    var r = document.getElementById('input').value;
    var area = Math.PI * r * r;
    document.getElementById('area').innerHTML = area;
}