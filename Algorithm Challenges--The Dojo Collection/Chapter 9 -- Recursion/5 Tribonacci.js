// recursively compute and return the nth 'Tribonacci" value where each value is the sum of the previos 3 numbers.  As earlier, treat the first 3 numbers as 0, 0, and 1
/* Example:
(3) => 1 (0+0+1)
(4) => 2 (0+1+1)
(5) => 4 (1+1+2)
(6) => 7 (1+2+4)

*/


function rTribonacci(n) {
    n = Math.floor(n);
    if (n < 2) return 0;
    if (n <= 3) return 1;
    return rTribonacci(n - 1) + rTribonacci(n - 2) + rTribonacci(n-3);
}

// one-liner version
let trib = (n) => n < 2 ? 0 : n <= 3 ? 1 : trib(n - 1) + trib(n - 2) + trib(n - 3);


console.log(rTribonacci(3))
console.log(rTribonacci(4))
console.log(rTribonacci(5))

console.log(trib(6))
console.log(trib(-24))
console.log(trib(9.87))