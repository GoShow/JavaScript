function solve(args) {
    var persons = args;
    var result = findYoungestPerson(persons);
    console.log('The youngest person is ' + result.firstName + ' ' + result.lastName);
}

function findYoungestPerson(persons) {
    var minAge = Number.MAX_VALUE;
    var minAgePerson = {};

    for (var person in persons) {
        var currentAge = persons[person].age;

        if (minAge > currentAge) {
            minAge = currentAge;
                minAgePerson = {
                firstName: persons[person].firstname,
                lastName: persons[person].lastname
            }
        }
    }
    return minAgePerson;
}

solve([
        { firstname: 'George', lastname: 'Kolev', age: 32},
        { firstname: 'Bay', lastname: 'Ivan', age: 81},
        { firstname: 'Baba', lastname: 'Ginka', age: 40}
    ]
);