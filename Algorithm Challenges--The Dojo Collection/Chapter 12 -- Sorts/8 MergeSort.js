// iterate through an array bubbling elements to the left into the correct position


function MergeSort(arr) {
    if (arr.length < 2) return arr;

    let lt = [];
    let eq = [arr[0]];
    let gt = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < eq[0]) lt.push(arr[i]);
        else if (arr[i] == eq[0]) eq.push(arr[i]);
        else gt.push(arr[i]);
    }

    return MergeSort(lt).concat(eq).concat(MergeSort(gt));
}

let arr = [30, 90, 20, -1, Infinity, 22 / 7, 90, 30, 11.3902]
console.log(arr)
console.log(MergeSort(arr))