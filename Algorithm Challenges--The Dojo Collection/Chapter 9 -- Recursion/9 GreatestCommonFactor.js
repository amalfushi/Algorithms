//Given two integers, create rGCF(num1, num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both).
//gcf(a, b) == a, if a == b
//gcf(a, b) == gcf(a-b, a), if a > b;
//gcf(a, b) == gcf(a, b-a), if b > a;

//Second: Rework gcf above to reduce stack consumption and expand the rGCF's reach.  you should be able to compute rGCF(123456, 987654)


function rGCF(a, b) {
    // if (a == 1 || b ==1) return 1;
    // if (a == b) return a;
    // if (a > b) return rGCF(a-b, b);
    // return rGCF(a, b-a);


    if (b) return rGCF(b, a % b);
    else return (Math.abs(a));
}


console.log(rGCF(20, 5));
console.log(rGCF(463, 925));
console.log(rGCF(34, 0));
console.log(rGCF(123456, 987654));
console.log(rGCF(987654, 123450));