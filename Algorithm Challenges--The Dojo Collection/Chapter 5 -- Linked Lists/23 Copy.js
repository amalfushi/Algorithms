const link = require("./_SLL.js");


// given a ponter to an sll, return a copy of that list, do not return the same list but 
// instead make a copy of each node int hat list and attach them in the same order as the
// original.


// stand alone version
// ==================================================
function SllCopy(list) {
    let nl = new link.SLL();

    let cur = list.head;

    while (cur != null) {
        nl.add(cur.value)
        cur = cur.next;
    }
    return nl;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.copy = function () {
    let nl = new link.SLL()

    let cur = this.head;

    while (cur != null) {
        nl.add(cur.value)
        cur = cur.next;
    }
    return nl;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = SllCopy(list1).add(9000)
console.log(list1.toString());
console.log(list2.toString())


let list3 = list2.copy().concat(list1);
console.log(list3.toString());

exports.copy;