//Given a sorted array and a value, recursively determine whether value is founc within array
// rBS([1, 3, 5, 6], 4) == false
//rBS([4, 5, 6, 8, 12], 5) == true;

function rBinarySearch(arr, num) {
    if (arr.length < 1) return false;
    let mid = arr.length % 2 == 0 ? arr.length/2 : Math.floor(arr.length/2);
    if (arr[mid] == num) return true;
    if (arr[mid] < num) return rBinarySearch(arr.splice(mid + 1), num);
    else return rBinarySearch(arr.splice(0, mid), num);
}

console.log(rBinarySearch([1, 3, 5, 6, 9], 4))
console.log(rBinarySearch([4, 5, 6, 8, 12], 5))
console.log(rBinarySearch([43, 52, 61, 88, 121], 121))
console.log(rBinarySearch([1, 2, 3, 4, 5, 6, 7, 9, 10], 8))