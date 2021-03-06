const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Reverse the node sequence of a list.  


// stand alone version
// ==================================================
function SllReverse(list) {
    if (!list.head || !list.head.next) return list;

    let revNodes = [];
    let cur = list.head;

    while (cur) {
        revNodes.push(cur);
        cur = cur.next;
    }

    // instantiate new list and add the last node in the array as the head;
    let revList = new link.SLL();
    cur = revNodes.pop();
    revList.head = cur;


    // add the last node in the array to the end of the SLL (cur). Advance 'cur' to that node'. Reset that node's next value
    while (revNodes.length) {
        cur.next = revNodes.pop();
        cur = cur.next;
        cur.next = null;
    }
    revList.tail = cur;
    return revList;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.reverse = function () {
    if (!this.head || !this.head.next) return this;

    let revNodes = [];

    let cur = this.head;
    while (cur) {
        revNodes.push(cur);
        cur = cur.next;
    }

    let revList = new link.SLL();

    while (revNodes.length > 0) {
        let temp = revNodes.pop();
        temp.next = null;           //making sure the nodes don't hold onto the old 'next value'
        revList.addNode(temp);
    }
    return revList;
}
// ==================================================

// In-place iterative version;
link.SLL.prototype.iReverse = function () {
    if (this.head || this.head.next) {
        let prev = null;
        let next = null;
        var cur = this.head;
        while (cur != null) {
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
    }
    this.head = this.tail;
    this.tail = cur;
    return this;
}

// Recursive version
link.SLL.prototype.rReverse = function (node = this.head) {
    if (!node || !node.next) return;
    let first = this.head;
    let rest = new link.SLL();

    rest.head = this.head.next;
    rest.rReverse();
    first.next.next = first;
    first.next = null;
    this.head = rest.head
    return this;
}

let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5)
let list2 = list1.reverse();
console.log(list2.toString());


list2.add("excelcior")
list2 = SllReverse(list2);
console.log(list2.toString())
console.log(list2.iReverse().toString());
console.log(list2.rReverse().toString())