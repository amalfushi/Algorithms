// Create a function combineArrs(arr1, arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in place?

// function combineArrays(arr1, arr2) {
//     let idx1 = 0;
//     let idx2 = 0;
//     let combined = [];

//     while (idx1 < arr1.length && idx2 < arr2.length) {
//         if (arr1[idx1] < arr2[idx2]) {
//             combined.push(arr1[idx1]);
//             idx1++;
//         } else {
//             combined.push(arr2[idx2]);
//             idx2++;
//         }
//     }

//     while (idx1 < arr1.length) {
//         combined.push(arr1[idx1]);
//         idx1++;
//     }

//     while (idx2 < arr2.length) {
//         combined.push(arr2[idx2]);
//         idx2++;
//     }

//     return combined;
// }



function combineArrays(arr1, arr2) {
    let merged = [];
    let idx1 = 0;
    let idx2 = 0;
    let mergIdx = 0;

    while(mergIdx < arr1.length + arr2.length) {
        let arr1exhausted = idx1 >= arr1.length;
        let arr2Exhausted = idx2 >= arr2.length;

        // if the first array pointer hasn't gotten to the end of the list AND ( the second array pointer has OR if value at the first array at index is less than the value at the list 2 at index).
        if (!arr1exhausted && (arr2Exhausted || arr1[idx1] < arr2[idx2])){
            merged[mergIdx] = arr1[idx1];
            idx1++;
        } else {
            merged[mergIdx] = arr2[idx2];
            idx2++;
        }
        mergIdx++
    }
    return merged;
}

let left = [2, 4, 6, 8, 10, 11, 13, 15]
let right = [1, 3, 5, 7, 9]

console.log(combineArrays(left, right))