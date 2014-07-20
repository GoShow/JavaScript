
var round = 0;
var playerXMoves = [];
var playerOMoves = [];
var playerSymbol;
var playerXScore = 0;
var playerOScore = 0;
var id;
var i;
var winningCombinations = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
]


function fill(currDiv) {
    id = currDiv.id;

    if (round % 2 === 0) {
        playerSymbol = 'X';
        playerXMoves.push(id);
        playerXMoves.sort();
    } else {
        playerSymbol = 'O';
        playerOMoves.push(id);
        playerOMoves.sort();

    }
    document.getElementById(id).innerHTML = playerSymbol;
    document.getElementById(id).removeAttribute('onclick');
    round++;

    if (checkWin(winningCombinations, playerXMoves)) {
        alert('Player ' + playerSymbol + ' is the Winner!!!');
        location.reload();

    } else if (checkWin(winningCombinations, playerOMoves)) {
        alert('Player ' + playerSymbol + ' is the Winner!!!');
    }

    else if (round === 9) {
        alert('No Winner!!!');
        location.reload();
    }
}

function checkWin(winCombinations, playerMoves) {
    for (i = 0; i < winCombinations.length; i += 1) {

        var currWinCombination = winCombinations[i];
        var firstDigit = currWinCombination[0];
        var secondDigit = currWinCombination[1];
        var thirdDigit = currWinCombination[2];

        if (playerMoves.indexOf(firstDigit) > -1 && playerMoves.indexOf(secondDigit) > -1 && playerMoves.indexOf(thirdDigit) > -1) {
            return true;
        }
    }
}
