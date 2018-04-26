// Given two unsorted arrays, create a new array containing the elements of both, resulting in an unsorted merge of all values. When populating the new array, alternate values between the two arrays until one is exhausted, then include all of the other.
// ex: [77, 22, 11, 22] and [2, 6, 7, 2, 6, 2] => [77, 2, 22, 6, 11, 7, 22, 2, 6, 2]

function interleaveArrays(firstArr, secondArr) {
    let out = [];

    let longest = firstArr.length > secondArr.length ? firstArr : secondArr;
    let shortest = firstArr.length < secondArr.length ? firstArr : secondArr;

    let longIdx = 0;
    let shortIdx = 0;

    while (longIdx < longest.length) {
        if (shortest[shortIdx]) out.push(shortest[shortIdx++]);
        out.push(longest[longIdx++]);
    }

    return out;
}

console.log(interleaveArrays([77, 22, 11, 22], [2, 6, 7, 2, 6, 2]))