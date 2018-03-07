const link = require("./_SLL.js");


// given a pointer to the first list node, return the smallest value;
function SllMin (node) {
    let min;

    while(node) {
        if (node.value < min || !min) min = node.value;
        node = node.next;
    }

    return min;
}



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball"); // seems janky with strings.  maybe it's hashing the string?

let list3 = new link.SLL();
list3.add('e').add('d').add('b').add('a');

console.log(SllMin(list1.head));
console.log(SllMin(list2.head));
console.log(SllMin(list3.head));