const link = require("./_SLL.js");


// Create a removeself() function for a listnode such that a node will disconnect
// itself from the linked list that includes it.  
// Note: the list node might be the first in a list, but it won't be the last;


// stand alone version
// ==================================================
function removeSelf(node) { 
    let out = node.value;
    node.value = node.next.value;
    node.next = node.next.next;
    return out;
}
// ==================================================


// class version
// ==================================================
link.Node.prototype.removeSelf = function () {        // this will do some janky things with the SLL class as it's currently set up
    let out = this.value;
    this.value = this.next.value;
    this.next = this.next.next;
    return out;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a').add('f');

removeSelf(list1.head.next.next)
console.log(list1.toString());
removeSelf(list2.head)
console.log(list2.toString());
removeSelf(list3.head.next.next.next)
console.log(list3.toString());

console.log(list1.head.next.removeSelf());
console.log(list2.head.removeSelf());
console.log(list3.head.next.next.removeSelf());
