// Recreate The Ackermann function, such that it overflows JavaScript at very low values.  The function accepts 2 non-negative integers and follows these rules:
// ackermann(0, num2) == num2+1;
// ackermann(num1, 0) == ackermann(num1-1, 1) if num1 > 0 (otherwise see #1)
// ackermann(num1, num2) == ackermann(num1-1, ackermann(num1, num2-1))




function ackermann(num1, num2) {
    if (num1 == 0) return num2+1
    else if (num2 == 0) return ackermann(num1-1, 1);
    else return ackermann(num1-1, ackermann(num1, num2-1));
}

console.log(ackermann(3, 10)) //maximum call stack
console.log(ackermann(2, 5))
console.log(ackermann(4, 5))