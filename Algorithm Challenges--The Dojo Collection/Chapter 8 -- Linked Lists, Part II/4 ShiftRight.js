const link = require("../Chapter 5 -- Linked Lists/_SLL.js");


// Given a list, shift the nodes tot he right by a given number
// bonus also handle negative shifts (to the Left);


// stand alone version
// ==================================================
function SllShift(list, k) {
    if (!list.head || !list.head.next) return list;
    list.tail.next = list.head; //make the list circular;

    let amount;
    
    // fiddle with the amount to do the least amount of shifting
    if (k < 0) {
        if (Math.abs(k) > list.length) amount = list.length - (k % list.length);
        else amount = list.length + k;
    }
    else if (k > list.length) amount = k % list.length;
    else amount = k;
    
    //shift head and tail 
    for (let i = 0; i < amount; i++) {
        list.head = list.head.next;
        list.tail = list.tail.next;
    }

    list.tail.next = null; // terminate the list at the new tail
    return list;
}
// ==================================================


// class version
// ==================================================
link.SLL.prototype.shift = function (k) {
    if (!this.head || !this.head.next) return this;
    this.tail.next = this.head; //make the list circular;

    let amount;
    
    if (k < 0) {
        if (Math.abs(k) > this.length) amount = this.length - (k % this.length);
        else amount = this.length + k;
    }
    else if (k > this.length) amount = k % this.length;
    else amount = k;

    for (let i = 0; i < amount; i++) {
        this.head = this.head.next;
        this.tail = this.tail.next;
    }

    this.tail.next = null;
    return this;
}
// ==================================================



let list1 = new link.SLL();
list1.add(9).add(8).add(7).add(6).add(5).add(4).add(3).add(2).add(1).add(0);
console.log(SllShift(list1, 3).toString());

console.log(list1.shift(22).toString());
console.log(list1.shift(-4).toString());
console.log(list1.shift(-18).toString());
