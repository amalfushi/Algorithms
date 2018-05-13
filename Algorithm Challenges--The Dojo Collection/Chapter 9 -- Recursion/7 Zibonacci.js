// Create a function that borrows ideas from the Fibonacci series but the results appear to zig-zag.
/* Example:
(0) => 1
(1) => 1 
(2) => 2
(2n+1) => zib(n) + Zib(n-1)+1 if n > 0 (ie odd values 3 and higher)
(2n) => zib(n)+ zib(n+1) +1 if n > 1 (ie even values 4 and higher)

*/


function Zibonacci(n) {
    if (n < 0) return 0;
    if (n < 2) return 1;
    if (n === 2) return 2;
    if (n % 2 !== 0) {
        let num = (n-1)/2;
        return Zibonacci(num) + Zibonacci(num - 1) + 1;
    }
    let num = n/2;
    return Zibonacci(num) + Zibonacci(num + 1) + 1;
}

for (let i = 0; i < 21; i++) console.log(i+":", Zibonacci(i))