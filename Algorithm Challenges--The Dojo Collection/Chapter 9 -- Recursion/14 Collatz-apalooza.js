// Define a function that, given a positive integer n, returns n/2 if n is even or 3*n+1 if n is odd. Continuously feeding results back into the function results in numerical series such as 5, 16, 18, 4, 2, 1.  According to Dr. Lothar Collatz, the series always reaches 1 (and then repeats 4, 2, 1, 4, 2, 1...)
// What starting number requires the most iterations before reaching 1 for the fist time?

function collatz(n) {
    if (n == 1) return 1;
    if (n%2 == 0) return collatz(n/2);
    else return collatz(3*n+1);
}