function solve(args) {
    var result = countOfDivs(args);
    console.log(result);
}

function countOfDivs(args) {
    var targetString = '<div';
    var searchedSymbol = '<';
    var counter = 0;
    for (var i = 0; i < args.length; i += 1) {
        var currSymbol = args[i];

        if (searchedSymbol === currSymbol) {
            var currString = '';
            for (var j = 0; j < targetString.length; j += 1) {
                currString += args[i + j];
            }

            if (targetString === currString) {
                counter += 1;
            }
        }
    }
    return counter;
}

solve('<!DOCTYPE html><html><head lang="en"><meta charset="UTF-8"><title>index</title><script src="/yourScript.js" defer></script></head><body><div id="outerDiv"><div class="first"><div><div>hello</div></div><div>hi<div></div></div><div>I am a div</div></div></body></html>')