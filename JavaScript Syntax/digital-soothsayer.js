function soothsayer(years, languages, cities, cars) {
    var yearsIndex = Math.floor(Math.random() * years.length);
    var langIndex = Math.floor(Math.random() * languages.length);
    var citiesIndex = Math.floor(Math.random() * cities.length);
    var carsIndex = Math.floor(Math.random() * cars.length);
    var result = [years[yearsIndex], languages[langIndex], cities[citiesIndex], cars[carsIndex] ];

    console.log('You will work for ' + result[0] + ' years on ' + result[1] + '.');
    console.log('You will live in ' + result[2] + ' and drive ' + result[3] + '.');
}

soothsayer([3, 5, 2, 7, 9],
    ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'],
    ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'],
    ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']);
