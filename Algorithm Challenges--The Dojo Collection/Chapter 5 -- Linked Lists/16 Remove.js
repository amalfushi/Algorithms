const link = require("./_SLL.js");


// given an sll and a value remove the (first) node with the given value.

// stand alone version
// ==================================================
function SllRemove(sll, val) {
    if (sll.head == null) return sll;
    
    if (sll.head.value == val) {            // check the head node for the value
        if (sll.head.next != null) {             // if there is a following node
            let temp = sll.head.next;
            sll.head.next = null;
            sll.head = temp;
        } else {                           
            sll.head = null;
        }
        return sll;
    }

    let cur = sll.head;
    while (cur != null) {
        if (cur.next != null && cur.next.value == val) {
            if (cur.next.next != null) cur.next = cur.next.next;
            else cur.next = null;
            return sll;
        }
        cur = cur.next;
    }

    return sll;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.remove = function (val) {
    if (this.head == null) return this;
    
    if (this.head.value == val) {
        if (this.head.next != null) {
            let temp = this.head.next;
            this.head.next = null;
            this.head = temp;
        } else {                           
            this.head = null;
        }
        return this;
    }

    let cur = this.head;
    while (cur != null) {
        if (cur.next != null && cur.next.value == val) {
            if (cur.next.next != null) cur.next = cur.next.next;
            else cur.next = null, this.tail = cur;
            return this;
        }
        cur = cur.next;
    }

    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a');

// console.log(SllRemove(list1, "7").toString());
// console.log(SllRemove(list2, "7").toString());
// console.log(SllRemove(list3, "e").toString());

console.log(list1.remove(5).toString());
console.log(list2.remove(7).toString());
console.log(list3.remove('e').toString());