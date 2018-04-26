// efficiently merge two already sorted arrays into a new sorted array containing the multiset of all values.
// ex: [1, 2, 2, 2, 7] and [2, 2, 6, 6, 7] => [1, 2, 2, 2, 2, 2, 6, 6, 7, 7]

function mergeSortedArrays(first, second) {
    let firstIdx = 0;
    let secondIdx = 0;
    let output = [];

    while(firstIdx < first.length && secondIdx < second.length) {
        if (first[firstIdx] <= second[secondIdx]) output.push(first[firstIdx++]);
        else output.push(second[secondIdx++]);
    }

    while (firstIdx < first.length) output.push(first[firstIdx++]);
    while (secondIdx < second.length) output.push(second[secondIdx++]);

    return output;
}

console.log(mergeSortedArrays([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))