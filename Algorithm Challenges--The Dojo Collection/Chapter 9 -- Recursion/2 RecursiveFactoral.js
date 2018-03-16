// Given num, return the product of it's ints from 1 up to num.
// If less than zero, treat as zero.  if not integer, truncate.
// 0! is 1.
// rFact(3) = 6   >    (1*2*3) = 6
// rFact(6.5) = 720    >    (1*2*3*4*5*6)

function rFactoral(n) {
    if (n < 1) return 1;
    n = Math.floor(n);
    return n *= rFactoral(n-1);
}

console.log(rFactoral(3))
console.log(rFactoral(6.5))
console.log(rFactoral(15))
console.log(rFactoral(1))
console.log(rFactoral(-20))