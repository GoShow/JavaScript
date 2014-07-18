
//Open the properties.html file to see the document properties

function displayProperties() {
    var properties = [];
    for (var prop in document) {
        properties.push(prop);
    }

    properties.sort();

    for (var prop in properties) {
        console.log(properties[prop])
    }
}

displayProperties();