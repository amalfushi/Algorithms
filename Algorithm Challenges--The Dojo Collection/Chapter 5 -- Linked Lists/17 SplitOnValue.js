const link = require("./_SLL.js");


// given an value and sll, split a list in two at the number provided.  Return the second list;

// stand alone version
// ==================================================
function SllSplit(sll, val) {
    sll.tail = null; // only for this standalone
    let nSll = new link.SLL();

    if (sll.head == null) return nSll;

    if (sll.head.value == val) {
        nSll.head = sll.head;
        sll.head = null;
        return nSll;
    }

    let cur = sll.head;
    let prev = cur;

    while (cur != null) {
        if (cur.value == val) {
            nSll.head = cur;
            prev.next = null;
            return nSll;
        }
        if (prev != cur) prev = cur;
        cur = cur.next;
    }

    return nSll;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.split = function (val) {
    let nSll = new link.SLL();


    if (this.head.value == val) {
        nSll.head = sll.head;
        this.head = null;
        return nSll;
    }

    let cur = this.head;
    let prev = cur;

    while (cur != null) {
        if (cur.value == val) {
            nSll.head = cur;
            prev.next = null;
            return nSll;
        }
        if (prev != cur) prev = cur;
        cur = cur.next;
    }

    return nSll;
}
// ==================================================

let list1 = new link.SLL();
list1.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list2 = list1.split(7)
console.log(list1.toString(), list2.toString());