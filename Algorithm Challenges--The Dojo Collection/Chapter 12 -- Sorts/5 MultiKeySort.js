// given an array of objects where each object contains a .firstName and a .lastName, sort the array by last namethen by first name.
// Example: Lee Abby before Aaron Carnevale and Aaron Carnevale before Giorgio Carnevale

let names = [{ "firstName": "Giorgio", "lastName": "Carnevale" }, { "firstName": "Aaron", "lastName": "Carnevale" }, { "firstName": "Lee", "lastName": "Abby" }]


// lazy way
console.log(names.sort((a, b) => a.lastname + a.firstName > b.lastName + b.firstName));