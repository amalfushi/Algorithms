const link = require("./_SLL.js");


// create a standalone function that removes the last node in the list and returns the new list


// stand alone version
// ==================================================
function MoveMinToFront(sll) {
    if (sll.head == null || sll.head.next == null) return sll; // check for empty or only 1 node

    let min = sll.head;
    let prevMin = min;

    // runners
    let cur = sll.head;
    let prev = cur;
    while (cur != null) {
        if (cur.value < min.value) min = cur, prevMin = prev;
        if (prev != cur) prev = cur;
        cur = cur.next;
    }

    if (min != sll.head) {
        prevMin.next = min.next;        // connect the two nodes on either side of the min (or terminate the list if there is none after the min);
        min.next = sll.head;            // set the min's next value to the current head;
        sll.head = min;                 // set the head to the min node

    }
    return sll;
}
// ==================================================



// class version
// ==================================================
link.SLL.prototype.minToFront = function () {
    if (this.head == null || this.head.next == null) return this;

    let cur = this.head;
    let prev = cur;

    let min = cur;
    let minPrev = cur;
    while (cur != null) {
        if (cur.value < min.value) min = cur, minPrev = prev;       
        if (prev != cur && cur.next != null) prev = cur;        //advance previous node except when the curent node is the first and last node
        cur = cur.next;
    }

    this.tail = prev;
    
    if (min != this.head) {
        minPrev.next = min.next;
        min.next = this.head;
        this.head = min;
        this.tail = prev;
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

console.log(MoveMinToFront(list1).toString());
console.log(MoveMinToFront(list2).toString());
console.log(MoveMinToFront(list3).toString());

console.log(list1.minToFront().toString());
console.log(list2.minToFront().toString());
console.log(list3.minToFront().toString());