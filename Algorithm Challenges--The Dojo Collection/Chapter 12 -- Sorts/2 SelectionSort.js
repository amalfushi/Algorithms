// Consider the first element of the array to be sorted. Iterate through the remainder of the list to find the next smallest element.  Swap that element with the leftmost unsorted element.  Continue doing this considering everything to the left of the last element swapped to be sorted.


function selectionSort(arr) {
    for (let left = 0; left < arr.length; left++) {
        let min = left;

        for (let right = left + 1; right < arr.length; right++) {
            if (arr[right] < arr[min]) min = right;
        }

        let temp = arr[left];
        arr[left] = arr[min];
        arr[min] = temp;
    }
    return arr;
}

console.log(selectionSort([30, 90, 20, -1, Infinity, 22 / 7,]))