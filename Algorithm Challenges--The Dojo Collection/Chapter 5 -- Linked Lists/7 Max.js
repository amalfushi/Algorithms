const link = require("./_SLL.js");


// given a pointer to the first list node, return the largest value;
function SllMax (node) {
    let max;

    while(node) {
        if (node.value > max || !max) max = node.value;
        node = node.next;
    }

    return max;
}



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball"); // seems janky with strings.  maybe it's hashing the string?

let list3 = new link.SLL();
list3.add('e').add('d').add('b').add('a');

console.log(SllMax(list1.head));
console.log(SllMax(list2.head));
console.log(SllMax(list3.head));