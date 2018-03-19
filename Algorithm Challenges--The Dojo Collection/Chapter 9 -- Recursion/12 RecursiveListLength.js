// Given first node of an SLL create a recursive function that returns the number
// of nodes in that list. Assume the list contains no loops and is short enough
// that there will be no stack overflow

const link = require("../Chapter 5 -- Linked Lists/_SLL.js");
let list = new link.SLL();
list.add(1).add(2).add(3).add(4).add(5).add(6)


// if the node exists, return 1 + whatever this called on the next node returns.  Otherwise return 0.
// Basically traverses to the end of the list, and adds 1 for every return to the caller.

function rSllLength(node) {
    return node != null ? 1 + rSllLength(node.next) : 0 
}

console.log(rSllLength(list.head))