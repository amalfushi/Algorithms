// Partition an unsorted array in-place. Use arr[0] as pivot value, return idx of the pivot

// [5, 4, 9, 2, 5, 3] => [4, 2, 3, 5, 9, 5] returns 4
// 4, 5, 9, 2, 5, 3
// 4, 5, 9, 2, 5, 3
// 4, 2, 5, 9, 5, 3
// 4, 2, 3, 5, 9, 5

// this request seems janky as heck.

function partitionArray(arr) {
    let part = arr[0];
    let greaterThan = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= part) {
            // splice splits an array on either side of the index provide (+- the number of elements to remove)returns them in a new array  while changing the original array to the two split portions
            greaterThan.push(arr.splice(i, 1)[0]);
            i--;
        }
    }

    arr = arr.concat(greaterThan);
    return arr;
}

console.log(partitionArray([5, 4, 9, 2, 5, 3]));