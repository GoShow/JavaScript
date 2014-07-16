function calcExpression() {
    try {
        var expression = eval(document.getElementById('input').value);
        document.getElementById('result').innerHTML = expression;
    }   catch(err){
        document.getElementById('result').innerHTML = 'Invalid expression!!!';

    }

}