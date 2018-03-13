const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// You are given two lists, each representing a number.
// Every node value is a 0-9 digit, with the first node
//  representing the least significant digit.  Return a 
//  new list representing the sum.

// eg: given 2-> 0-> 1   &    8-> 4 , return 0-> 5-> 1 
// because 102 + 48 = 150


function SumNumerals(list1, list2) {
    let sum = new link.SLL();
    let left = list1.head;
    let right = list2.head;

    let carryOver = 0;


    while (true) {
        let val = carryOver;
        carryOver = 0;

        if (left) val += left.value, left = left.next;
        if (right) val += right.value, right = right.next;
        

        if (val > 9){
            carryOver = 1;
            val = val % 10;
        }

        sum.add(val);
        if (carryOver == 0 && !left && !right) break;
    }
    
    return sum;
}

let list1 = new link.SLL(),
    list2 = new link.SLL();
list1.add(2).add(0).add(1);
list2.add(8).add(4);
console.log(SumNumerals(list1, list2).toString());

list1 = new link.SLL();
list2 = new link.SLL();
list1.add(9).add(9).add(9).add(9).add(9).add(9)
list2.add(1).add(1).add(1).add(1).add(1).add(1);
console.log(SumNumerals(list1, list2).toString());