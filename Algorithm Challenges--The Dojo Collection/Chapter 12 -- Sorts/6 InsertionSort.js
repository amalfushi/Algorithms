// iterate through an array bubbling elements to the left into the correct position


function InsertionSort(arr) {
    for (let sorted = 0; sorted < arr.length - 1; sorted++) {
        let current = sorted + 1;
        while (arr[current - 1] > arr[current]) {
            let temp = arr[current];
            arr[current] = arr[current - 1];
            arr[current - 1] = temp;
            current--;
        }
    }

    return arr;
}

let arr = [30, 90, 20, -1, Infinity, 22 / 7,]
console.log(arr)
console.log(InsertionSort(arr))