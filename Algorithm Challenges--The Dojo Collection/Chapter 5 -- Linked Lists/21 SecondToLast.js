const link = require("./_SLL.js");


// given a pointer to an sll, return the second to last value in that list;


// stand alone version
// ==================================================
function SllSecondToLast(sll) {
    if (sll.head == null) return null;
    let cur = sll.head;
    let prev = cur;

    while(cur.next != null) {
        if (prev != cur) prev = cur;
        cur = cur.next;
    }
    return prev.value;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.secondToLast = function () {
    if (this.head == null) return null;
    if (this.head == this.tail) return this.head.value;

    let cur = this.head;

    while(cur.next != this.tail) cur = cur.next;
    return cur.value;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a').add('f');

console.log(SllSecondToLast(list1));
console.log(SllSecondToLast(list2));
console.log(SllSecondToLast(list3));

console.log(list1.secondToLast());
console.log(list2.secondToLast());
console.log(list3.secondToLast());
