function findMaxSequence(sequence) {
    var i;
    var currSequence = [sequence[0]];
    var maxSequence = [sequence[0]];

    for (i = 1; i < sequence.length; i += 1) {
        currentElement = sequence[i];
        previousElement = sequence[i - 1];

        if (currentElement > previousElement) {
            currSequence.push(currentElement);

            if (i === sequence.length - 1 && maxSequence.length <= currSequence.length) {
                maxSequence = currSequence;
            }
        } else {

            if (maxSequence.length <= currSequence.length) {
                maxSequence = currSequence;
            }
            currSequence = [currentElement];
        }
    }

    if (maxSequence.length === 1) {
        console.log('no')
    } else {
        console.log(maxSequence);
    }
}
findMaxSequence([3, 2, 3, 4, 2, 2, 4]);
findMaxSequence([3, 5, 4, 6, 1, 2, 3, 6, 10, 32]);
findMaxSequence([3, 2, 1]);
