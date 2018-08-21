// Given two numbers, swap them in place.

function swapNumbers(first, second) {
    // console.log(first, second)
    first = second - first; //The difference between the two
    second = second - first; //Reduce the scond by the difference
    first = second + first; // Increase the first by the difference
    return `First: ${first}, Second: ${second}`;
}

var five = 5;
var ten = 10;
var eight = 8

console.log(swapNumbers(five, ten));
console.log(swapNumbers(eight, five));