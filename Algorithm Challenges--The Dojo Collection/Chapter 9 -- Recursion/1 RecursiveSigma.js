// Write a recursive function that given a number returns the sum of integers from 1 to that number
// example: rSigma(5) = 15 because 1+2+3+4+5 = 15.
//          rSigma(2.5) = 3
//          rSigma(-1) = 0



function rSigma(n) {
    if (n < 0) return 0;
    return Math.floor(n) + rSigma(n-1);
}

console.log(rSigma(5))
console.log(rSigma(2.5))
console.log(rSigma(-1))