const link = require("./_SLL.js");


// given an sll, a lowVal and highVal, remove from the list any nodes that have values outside that range;


// stand alone version
// ==================================================
function SllFilter(list, high, low) {
    let cur = list.head;
    let prev = cur;         // only exists to take care of the last node.

    while (cur != null) {
        if (cur.value > high || cur.value < low) {
            if (cur.next == null) prev.next = null;
            else {
                cur.value = cur.next.value;
                cur.next = cur.next.next;
                continue;
            }
        }

        if (prev != cur) prev = cur;
        cur = cur.next;
    }
    return list;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.filter = function (high, low) {
    let cur = this.head;
    let prev = cur;

    while (cur != null) {
        if (cur.value > high || cur.value < low) {
            if (cur == this.tail){
                prev.next = null;
                this.tail = prev;
            } else {
                cur.value = cur.next.value;
                cur.next = cur.next.next;
            }
            this.length--;
            continue;
        }

        if (prev != cur) prev = cur;
        cur = cur.next;
    }
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);

let list2 = new link.SLL();
list2.add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1);

console.log(SllFilter(list1, 8, 1).toString())
console.log(list2.filter(3, -2).toString())