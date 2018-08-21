//Given two arrays of integers, compute the pair of values(one value in each array) with the smallest non-negatie difference. Return the difference;


//Brute Force
var smallestDifference = function (arr1, arr2) {
    let differences = {}; //could be cut out if you don't need to return the pair
    let minDiff = Infinity;

    for (let i = 0; i < arr1.length; i++) { // for each number in the arr1 aray
        let difference;
        for (let k = 0; k < arr2.length; k++) { //find the value in the second array that provides the smallest difference greater than 0;
            difference = arr1[i] - arr2[k];
            if (difference < minDiff && difference > -1) minDiff = difference; // if the current difference is less than the minimum difference
        }
        differences[difference] = arr1[i];  //store the difference as they key and the number at the current index in the long array as the value
    }

    if (minDiff == Infinity) return 'No non-negative difference pair';
    return `${minDiff} [${differences[minDiff]}, ${differences[minDiff] - minDiff}]`;
}




//O(A log A + B log B) + O(A+B)
var smallestDifferencePointers = function (arr1, arr2) {
    let first = arr1.sort((a, b) => a - b);
    let second = arr2.sort((a, b) => a - b);

    let p1 = 0;
    let p2 = 0;

    let difference = Infinity;

    while (p1 < first.length && p2 < second.length) {
        let cur = Math.abs(first[p1] - second[p2])
        if (cur < difference) difference = cur;

        //move smaller value;
        if (first[p1] < second[p2]) p1++;
        else p2++;
    }
    return difference;
}

let left = [1, 3, 15, 11, 2];
let right = [23, 127, 235, 19, 8];

console.log(smallestDifference(left, right))
console.log(smallestDifferencePointers(left, right))