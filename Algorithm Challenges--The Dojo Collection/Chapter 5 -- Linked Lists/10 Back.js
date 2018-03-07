const link = require("./_SLL.js");


// given a pointer to the first list node, return the last value in the list;

// book version
function SllLast (node) {
    while(node.next) node = node.next;
    return node.value;
}

// part of the class version
link.SLL.prototype.back = function() {
    // using Sll tail
    // return this.tail.value;


    // not using the SLL tail
    if (this.head == null) return null;
    let cur = this.head;
    
    while (cur.next) cur = cur.next;
    return cur.value;
}



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('d').add('b').add('a');

console.log(SllLast(list1.head));
console.log(SllLast(list2.head));
console.log(SllLast(list3.head));