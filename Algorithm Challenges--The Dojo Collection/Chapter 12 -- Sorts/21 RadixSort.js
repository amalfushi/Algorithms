// For an array 7 million long with values from 0 to 4 billion, how rapidly can you radix-sort it in place.  You can create a new array as large as the original.

function getDigit(num, nth) {
    //get the last nth digit of a number;
    let out = 0;
    while (nth--) {
        out = num % 10;
        num = Math.floor((num - out) / 10);
    }
    return out;
}

function radixSort(data) {
    // get the length of digits of the max value in this array
    //    round     times number can be divided by 10       maximum of set
    let max = Math.ceil(Math.log10(Math.max(...data)));
    let buckets = [];
    let idx = 0;

    for (let i = 0; i < max; i++) {
        // rebuild buckets accoring to which digit we're looking at;
        buckets = [];
        for (var j = 0; j < data.length; j++) {
            let digit = getDigit(data[j], i + 1);
            buckets[digit] = buckets[digit] ? buckets[digit] : []; // if the bucket exists, use it, otherwise set it to a new array
            buckets[digit].push(data[j]);
        }

        idx = 0;

        buckets.forEach(bucket => {
            if (bucket && bucket.length > 0) {
                bucket.forEach(number => {
                    data[idx++] = number;
                })
            }
        });
    }
    return data;
}

let data = [123, 8189, 989, 4, 89, 8, 89489, 8, 489, 48, 77723, 8, 7, 318, 80]

console.log(radixSort(data))