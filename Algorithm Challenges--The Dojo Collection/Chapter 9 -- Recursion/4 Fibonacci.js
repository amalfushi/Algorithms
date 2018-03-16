// recursively comput and return the nth Fibonacci value.  As earlier, treat the first two numbers as 0 and 1
/* Example:
(2) => 1 (0+1)
(3) => 2 (1+1)
(4) => 3 (1+2)
(5) => 5 (2+3)
(3.65) => 2 (2)
(-2) => 0 (0)
*/


function rFibonacci(n) {
    n = Math.floor(n);
    if (n < 1) return 0;
    if (n <= 2) return 1;
    return rFibonacci(n - 1) + rFibonacci(n - 2);
}

let fib = (n) => n < 1 ? 0 : n <= 2 ? 1 : fib(n - 1) + fib(n - 2);


console.log(rFibonacci(3.65))
console.log(rFibonacci(5))
console.log(rFibonacci(-3))

console.log(fib(10))
console.log(fib(37))
console.log(fib(9.87))