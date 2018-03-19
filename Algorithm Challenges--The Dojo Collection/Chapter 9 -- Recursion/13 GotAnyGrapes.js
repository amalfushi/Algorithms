// Martin loves grapes. He sees a number of baggies containing grapes all in a row. Stephen tells him that he can take as many of the baggies as he wants as long as he doesn't take two that are next to each other. martin wants to maximize his number of grapes. Grapes are pretty healthy, so let's help him out.  Create a function to accept an array of non-negative integers representing the number of grapes in each adjacent baggy. Your function should maximize the number of grapes he can obtain.

//rGotGrapes([1,2,3,4,5]) = 9 (5,3,1)
//rGotGrapes([30, 25, 20, 40, 10, 15, 33, 21]) = 103 (30, 40, 33)

function rGotGrapes(arr, idx) {
    if (idx == 0) return arr[0];
    if (idx == 1) return Math.max(arr[0], arr[1]);
    return Math.max(rGotGrapes(arr, idx - 2) + arr[idx], rGotGrapes(arr, idx - 1));
}


//ridiculous one liner traversing the array the opposite direction
let rGG = (arr, idx) => idx == arr.length-1 ? arr[arr.length-1] : idx == arr.length-2 ? Math.max(arr[arr.length-1], arr[arr.length-2]) : Math.max(rGG(arr, idx + 2) + arr[idx], rGG(arr, idx + 1));

console.log(rGotGrapes([1, 2, 3, 4, 5], 4))
console.log(rGotGrapes([30, 20, 20, 40, 10, 15, 33, 21], 7)) // 30 + 40 + 15 + 21 = 106
console.log(rGG([30, 20, 20, 40, 10, 15, 33, 21], 0))