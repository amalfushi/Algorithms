// Iterate through an array comparing the value of the current index with the subsequent.
// Swap values if the current index is greater than the next.
// Do this until you hit the end of the array.


function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;

                sorted = false;
            }
        }
    }

    return arr;
}

console.log(bubbleSort([30, 90, 20, -1, Infinity, 22 / 7,]))