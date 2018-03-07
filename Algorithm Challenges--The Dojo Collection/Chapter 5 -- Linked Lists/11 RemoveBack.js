const link = require("./_SLL.js");


// create a standalone function that removes the last node in the list and returns the new list

function RemoveBack(sll) {
    if (sll.head == null) return sll; // check for empty sll
    if (sll.head.next == null) {      // check for only one node
        sll.head = null
        return sll
    }

    let cur = sll.head;

    // go to second to last node
    while (cur.next) {
        if (cur.next.next == null) {
            break;
        }
        cur = cur.next;
    }
    // get rid of the last node via garbage collection
    cur.next = null;
    return sll;
}


// class version
// ==================================================
link.SLL.prototype.pop = function () {
    if (this.head == null) return this;
    if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
        return this;
    }

    let cur = this.head;
    while (cur.next) {
        if (cur.next == this.tail) break;
        cur = cur.next;
    }

    cur.next = null;
    this.tail = cur;

    return this;
}
// ==================================================

let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e');

console.log(list1.pop().toString());
console.log(list2.pop().toString());
console.log(list3.pop().toString());

console.log(RemoveBack(list1).toString());
console.log(RemoveBack(list2).toString());
console.log(RemoveBack(list3).toString());