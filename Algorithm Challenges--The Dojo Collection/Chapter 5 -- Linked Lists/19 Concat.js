const link = require("./_SLL.js");


// given an sll and a value remove the (first) node with the given value.

// stand alone version
// ==================================================
function SllConcat(list1, list2) { // ignoring the tail parameter on the lists.
    if (list1.head == null) {
        list1.head = list2.head;
    } else {
        let cur = list1.head;

        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = list2.head
    }

    return list1;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.concat = function (list) {       //this does leave some pointers for the second list floating around
    this.tail.next = list.head;
    this.tail = list.tail;
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5);

let list2 = new link.SLL();
list2.add("Barnaby Jones").add("tacocat").add("7").add("roqjieorpjl").add("The quickest dog gets the slowest ball");

let list3 = new link.SLL();
list3.add('e').add('e').add('e').add('a');

console.log(list1.concat(list2).concat(list3).toString())

// console.log(list1.concat(list2).toString());
// console.log(list2.concat(list3).toString());
// console.log(list1.toString());