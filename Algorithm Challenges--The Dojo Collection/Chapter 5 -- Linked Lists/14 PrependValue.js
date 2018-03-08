const link = require("./_SLL.js");


// given an sll, a value, and a 'before' value, create a function that
// inserts a new node before the first node containing the before value
// or at the end of the list if there are none


// stand alone version
// ==================================================
function SllPrepend(sll, val, before) {
    let nn = new link.Node(val);

    if (sll.head == null) {
        sll.head = nn;
        return sll;
    }

    let cur = sll.head;
    while (cur.next != null && cur.next.value != before) {
        cur = cur.next;
    }

    nn.next = cur.next;
    cur.next = nn;

    return sll;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.prepend = function (val, before) {
    let nn = new link.Node(val);

    if (this.head == null) {
        this.head = nn;
        return this;
    }

    let cur = this.head;
    while (cur.next != null && cur.next.value != before) {
        cur = cur.next;
    }

    nn.next = cur.next;
    cur.next = nn;
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a');

console.log(SllPrepend(list1, "########", "7").toString());
console.log(SllPrepend(list2, "########", "7").toString());
console.log(SllPrepend(list3, "########", "7").toString());

console.log(list1.prepend(8675309, "########").toString());
console.log(list2.prepend(8675309, "########").toString());
console.log(list3.prepend(8675309, "####").toString());