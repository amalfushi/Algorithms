const link = require("./_SLL.js");


// given an sll, a value, and a 'after' value, create a function that
// inserts a new node after the first node containing the 'after' value
// or at the end of the list if there are none


// stand alone version
// ==================================================
function SllAppend(sll, val, after) {
    let nn = new link.Node(val);

    if (sll.head == null) {
        sll.head = nn;
        return sll;
    }

    let cur = sll.head;
    while (cur.next != null && cur.value != after) {
        cur = cur.next;
    }

    nn.next = cur.next;
    cur.next = nn;

    return sll;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.append = function (val, after) {
    let nn = new link.Node(val);

    if (this.head == null) {
        this.head = nn;
        return this;
    }

    let cur = this.head;
    while (cur.next != null && cur.value != after) {
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

console.log(SllAppend(list1, "########", "7").toString());
console.log(SllAppend(list2, "########", "7").toString());
console.log(SllAppend(list3, "########", "7").toString());

console.log(list1.append(8675309, "########").toString());
console.log(list2.append(8675309, "########").toString());
console.log(list3.append(8675309, "####").toString());