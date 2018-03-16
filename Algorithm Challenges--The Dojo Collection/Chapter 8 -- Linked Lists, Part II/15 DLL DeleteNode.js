const link = require("./_DLL.js");

// Given a node, remove it from a DLL;

// class version
// ==================================================
link.DLL.prototype.deleteNode = function (node) {
    if (!node.prev) this.head = node.next, node.next.prev = null;
    else if (!node.next) this.tail = node.prev, node.prev.next = null;
    else {
        node.prev.next = node.next;
        node.next.prev = node.prev
    }
    node.prev = null;
    node.next = null;
    return this;
}
// ==================================================



let list1 = new link.DLL();
list1.push(9).push(8).push(7).push(6).push(5).push(4).push(3).push(2).push(1).push(0);
console.log(list1.toString())
console.log(list1.deleteNode(list1.head.next.next.next).toString());
console.log(list1.deleteNode(list1.head).toString());
console.log(list1.deleteNode(list1.tail).toString());
