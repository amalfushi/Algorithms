// Create a function that borrows ideas from the Fibonacci series but the results appear to zig-zag.
/* Example:
(0) => 1
(1) => 1 
(2) => 2
(2n+1) => zib(n) + Zib(n-1)+1 if n > 0 (ie odd values 3 and higher)
(2n) => zib(n)+ zib(n+1) +1 if n > 1 (ie even values 4 and higher)

*/


function Zibonacci(n) {
    if (n < 2) return 1;
    if (n == 2) return 2;
    if (n % 2 != 0) return n + Zibonacci(n - 1) + 1;
    else return n + Zibonacci(n + 1) + 1;
}

console.log(Zibonacci(1))
console.log(Zibonacci(2))
console.log(Zibonacci(3))
console.log(Zibonacci(4))// causes a stack overflow starting here
console.log(Zibonacci(5))
console.log(Zibonacci(6))
console.log(Zibonacci(7))