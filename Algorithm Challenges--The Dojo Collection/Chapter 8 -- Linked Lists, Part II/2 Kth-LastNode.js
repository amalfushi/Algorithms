const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// given a pointer to an SLL and a value k, return the kth node from the end of the list (the node will have exactly k nodes following it)


// stand alone version
// ==================================================
function SllKthLast(list, k) {
    let walker = list.head;
    let runner = list.head;

    for (let i = 0; i < k; i++) {
        if (!runner.next) return null;
        runner = runner.next;
    }

    while (runner) {
        runner = runner.next;
        walker = walker.next;
    }

    return walker;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.kthLast = function (k) {
    if (k > this.length) return null;
    let walker = this.head,
        runner = this.head;

    for (let i = 0; i < k; i++) {
        if (!runner.next) return null;
        runner = runner.next;
    }

    while (runner) runner = runner.next, walker = walker.next;
    return walker;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);
console.log(SllKthLast(list1, 3).toString())

list1.add("excelcior")
console.log(list1.kthLast(5).toString(), list1.kthLast(7))


list2 = new link.SLL();

console.log(list2.kthLast())
