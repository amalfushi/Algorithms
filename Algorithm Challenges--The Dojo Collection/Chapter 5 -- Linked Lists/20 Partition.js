const link = require("./_SLL.js");


// given an sll and a nodevalue, create a function that moves all nodes with values less than the
// nodevalue before it, and all values greater than it after it;


// stand alone version
// ==================================================
function SllPartition(list, val) {
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.partition = function (val) {

    if (this.head == null || this.head.next == null) return this;

    let lt = new link.SLL();
    let eq = new link.SLL();
    let gt = new link.SLL();

    let cur = this.head;

    while (cur != null) {
        if (cur.value == val) {
            eq.addNode(cur);
        } else if (cur.value < val) {
            lt.addNode(cur);
        } else {
            gt.addNode(cur);
        }
        let temp = cur;
        cur = cur.next;
        temp.next = null;
    }

    if (eq.length > 0) {
        lt.concat(eq).concat(gt);
        this.head = lt.head;
    }
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a').add('f');

console.log(list1.partition(6).toString())
console.log(list2.partition("roqjieorpjl").toString())
console.log(list3.partition("e").toString())